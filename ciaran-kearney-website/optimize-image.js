// Script to optimize the profile image
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputFile = 'public/assets/images/ciaran_original.jpg';
const outputProfileFile = 'public/assets/images/ciaran_profile.jpg';
const outputSquareFile = 'public/assets/images/ciaran_square.jpg';

async function optimizeImage() {
  try {
    console.log('Optimizing image...');

    // Create a standard optimized profile image (cropped a bit to focus more on the person)
    await sharp(inputFile)
      // Crop the image to focus more on the upper body
      .extract({ left: 500, top: 300, width: 800, height: 1000 })
      // Resize to a good size for the website while maintaining aspect ratio
      .resize(400, null, { withoutEnlargement: true })
      // Optimize for web
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputProfileFile);

    console.log('Created profile image');

    // Create a square profile thumbnail (for the circular profile image)
    await sharp(inputFile)
      // Focus on the face for the square crop
      .extract({ left: 600, top: 250, width: 700, height: 700 })
      // Make it square with 300px dimensions
      .resize(300, 300, { fit: 'cover' })
      // Optimize for web
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputSquareFile);

    console.log('Created square profile image');

    // Get file sizes for comparison
    const originalSize = fs.statSync(inputFile).size;
    const profileSize = fs.statSync(outputProfileFile).size;
    const squareSize = fs.statSync(outputSquareFile).size;

    console.log(`Original size: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`Profile size: ${(profileSize / 1024).toFixed(2)} KB`);
    console.log(`Square size: ${(squareSize / 1024).toFixed(2)} KB`);
    console.log(`Reduction (profile): ${((1 - profileSize / originalSize) * 100).toFixed(2)}%`);
    console.log(`Reduction (square): ${((1 - squareSize / originalSize) * 100).toFixed(2)}%`);
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
