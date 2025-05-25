// Script to process and save the profile picture
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define the input and output paths
const outputDir = path.join(__dirname, 'public', 'assets', 'images');
const outputPath = path.join(outputDir, 'ciaran_profile.jpg');
const outputSquarePath = path.join(outputDir, 'ciaran_square.jpg');
const outputOriginalPath = path.join(outputDir, 'ciaran_original.jpg');

// Make sure the directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy the uploaded profile picture to the website's assets directory
fs.copyFileSync(
  path.join(__dirname, '../uploads/profile_picture.jpg'),
  outputOriginalPath
);

// Process the profile picture for different uses
async function processImages() {
  try {
    // Save the original version
    await sharp(outputOriginalPath)
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    // Create a square version for profile picture (240x240)
    await sharp(outputOriginalPath)
      .resize(240, 240, {
        fit: 'cover',
        position: 'top'
      })
      .jpeg({ quality: 90 })
      .toFile(outputSquarePath);

    console.log('Profile pictures processed successfully');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
