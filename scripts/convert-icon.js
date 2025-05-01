const fs = require('fs');
const sharp = require('sharp');

async function convertSvgToPng() {
  try {
    const svgBuffer = fs.readFileSync('./public/icon.svg');
    
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile('./public/icon.png');
      
    console.log('Icon converted successfully!');
  } catch (error) {
    console.error('Error converting icon:', error);
  }
}

convertSvgToPng(); 