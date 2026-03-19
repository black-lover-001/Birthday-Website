import { imageSize } from 'image-size';
import fs from 'fs';
import path from 'path';

const dir = './src/assets';

fs.readdirSync(dir).forEach(file => {
  const filePath = path.join(dir, file);
  const dimensions = imageSize(filePath);

  console.log(`${file} → ${dimensions.width} x ${dimensions.height}`);
});