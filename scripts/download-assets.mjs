// Downloads image assets from minhnguyendesign.vn into public/images (+ seo, logos)
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://minhnguyendesign.vn/wp-content/uploads/';
const OUT = 'public/images';

// filename (relative to uploads base) -> local name under public/images
const IMAGES = [
  // logos / brand
  ['2022/03/MND-LOGO-PNG-1.png', 'logo-mnd.png'],
  ['2023/08/cropped-minh-nguyen-logo.png', 'logo-mark.png'],
  ['2022/03/patt.svg', 'pattern.svg'],
  ['2022/04/modal-bg.jpg', 'modal-bg.jpg'],
  // about "Building the future cities" trio
  ['2022/03/1.jpg', 'about-1.jpg'],
  ['2022/03/2.jpg', 'about-2.jpg'],
  ['2022/03/3.jpg', 'about-3.jpg'],
  // projects photo slider
  ['2023/08/H1_0197.jpg', 'project-h1.jpg'],
  ['2023/08/H4_6509.jpg', 'project-h4.jpg'],
  ['2023/10/A0206247.png', 'project-a0206247.png'],
  ['2023/10/A0206661.png', 'project-a0206661.png'],
  ['2023/10/A0206862.png', 'project-a0206862.png'],
  ['2024/02/A0208364-min.png', 'project-a0208364.png'],
  ['2024/02/424937283_913959020730675_7927943923963156864_n-1.jpg', 'project-portrait-1.jpg'],
  ['2023/11/PSY05440-2.png', 'project-psy05440.png'],
  // news / event cards
  ['2023/11/DSC_5565-2-scaled.jpeg', 'news-gala-2022.jpeg'],
  ['2023/11/340090304_772647787543458_6279424910407253990_n.jpeg', 'news-training-q3.jpeg'],
  ['2023/11/DIAGEO@HABANOS-byDaiTran-57-scaled.jpg', 'news-mortlach.jpg'],
  ['2024/02/407656467_871743811618863_3196658057376123216_n.jpg', 'news-4.jpg'],
  ['2024/02/408533326_874392024687375_9221720481161597706_n.jpg', 'news-5.jpg'],
  // service / category imagery
  ['2023/09/558d77d864249c7ac535.jpg', 'cat-1.jpg'],
  ['2023/09/z2575159943693_6ef81bf535458e8b19a4e8a06b3e68f3.jpg', 'cat-2.jpg'],
  ['2023/09/z4728682008168_2904f0601f803f6f500097c9e08869b8.jpg', 'cat-3.jpg'],
  ['2022/04/Image.png', 'misc-image.png'],
];

async function download([rel, local], i) {
  const url = BASE + rel;
  const dest = join(OUT, local);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.error(`✗ ${res.status} ${url}`); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`✓ ${local} (${(buf.length / 1024).toFixed(0)}kb)`);
  } catch (e) {
    console.error(`✗ ${url}: ${e.message}`);
  }
}

// batched parallel (4 at a time)
for (let i = 0; i < IMAGES.length; i += 4) {
  await Promise.all(IMAGES.slice(i, i + 4).map((x, j) => download(x, i + j)));
}
console.log('Done.');
