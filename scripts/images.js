import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC_DIR = 'images-src';
const OUT_DIR = 'src/assets/images';
const WIDTHS = [180, 358];
const FORMATS = {
  avif: (img) => img.avif({ quality: 50 }),
  webp: (img) => img.webp({ quality: 75 }),
  jpg: (img) => img.jpeg({ quality: 80, mozjpeg: true }),
};

await mkdir(OUT_DIR, { recursive: true });

const files = (await readdir(SRC_DIR)).filter((file) => /\.(jpe?g|png)$/i.test(file));
const totals = { source: 0, avif: 0, webp: 0, jpg: 0 };

for (const file of files) {
  const { name } = path.parse(file);
  totals.source += (await stat(path.join(SRC_DIR, file))).size;

  for (const width of WIDTHS) {
    for (const [ext, convert] of Object.entries(FORMATS)) {
      const target = path.join(OUT_DIR, `${name}-${width}.${ext}`);
      const resized = sharp(path.join(SRC_DIR, file)).resize({ width, withoutEnlargement: true });

      await convert(resized).toFile(target);
      totals[ext] += (await stat(target)).size;
    }
  }

  console.log(`done: ${file}`);
}

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

console.log('\nTotal size:');
for (const [key, value] of Object.entries(totals)) {
  console.log(`  ${key.padEnd(7)} ${kb(value)}`);
}
