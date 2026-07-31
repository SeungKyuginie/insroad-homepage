// Process indexed PNG: add transparency for white bg, brighten near-black text
const fs = require('fs');
const zlib = require('zlib');

const src = 'public/insroadlogo.png';
const dst = 'public/insroadlogo.png';

const buf = fs.readFileSync(src);
if (buf.slice(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error('not a PNG');

// CRC-32 table
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = (crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8)) >>> 0;
  return (c ^ 0xffffffff) >>> 0;
}

// Parse chunks
const chunks = [];
let pos = 8;
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.slice(pos + 4, pos + 8).toString('ascii');
  const data = Buffer.from(buf.slice(pos + 8, pos + 8 + len));
  chunks.push({ type, data });
  pos += 12 + len;
  if (type === 'IEND') break;
}

const plte = chunks.find(c => c.type === 'PLTE');
if (!plte) throw new Error('no PLTE');
const palN = plte.data.length / 3;
console.log('Palette entries:', palN);

// Modify palette + build tRNS
const trns = Buffer.alloc(palN, 255);
let transparentCount = 0, brightenedCount = 0, redCount = 0;

for (let i = 0; i < palN; i++) {
  const r = plte.data[i * 3];
  const g = plte.data[i * 3 + 1];
  const b = plte.data[i * 3 + 2];
  const brightness = (r + g + b) / 3;
  const isRed = r > g + 20 && r > b + 20; // red-dominant
  const isNearWhite = r > 220 && g > 220 && b > 220 && Math.abs(r - g) < 15 && Math.abs(g - b) < 15;
  const isNearBlack = brightness < 100 && !isRed;

  if (isNearWhite) {
    // fully transparent
    trns[i] = 0;
    transparentCount++;
  } else if (isNearBlack) {
    // brighten near-black text to warm off-white so it reads on dark bg
    plte.data[i * 3] = 0xf2;
    plte.data[i * 3 + 1] = 0xf0;
    plte.data[i * 3 + 2] = 0xec;
    brightenedCount++;
  } else if (isRed) {
    redCount++;
    // keep reds
  } else {
    // mid-tone: fade proportionally so anti-alias edges don't leave white halo
    const alpha = Math.max(0, Math.min(255, Math.round(255 - brightness * 1.2)));
    trns[i] = alpha;
  }
}

console.log(`Transparent: ${transparentCount}, brightened: ${brightenedCount}, red: ${redCount}`);

// Build tRNS chunk, insert immediately after PLTE
const trnsChunk = { type: 'tRNS', data: trns };
const plteIdx = chunks.findIndex(c => c.type === 'PLTE');
chunks.splice(plteIdx + 1, 0, trnsChunk);

// Rebuild PNG
const out = [buf.slice(0, 8)];
for (const c of chunks) {
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(c.data.length, 0);
  const typeBuf = Buffer.from(c.type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, c.data])), 0);
  out.push(lenBuf, typeBuf, c.data, crcBuf);
}
const outBuf = Buffer.concat(out);
fs.writeFileSync(dst, outBuf);
console.log('Wrote', dst, outBuf.length, 'bytes');
