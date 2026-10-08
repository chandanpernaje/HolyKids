import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument({ autoFirstPage: false });
doc.pipe(fs.createWriteStream('public/beginner-english-sample.pdf'));

const order = [1, 2, 3, 4, 5];

for (const i of order) {
  const imagePath = `public/english-${i}.jpg`;
  if (fs.existsSync(imagePath)) {
    const img = doc.openImage(imagePath);
    doc.addPage({ size: [img.width, img.height], margin: 0 });
    doc.image(img, 0, 0, { width: img.width, height: img.height });
  }
}

doc.end();
console.log('PDF created successfully at public/beginner-english-sample.pdf');
