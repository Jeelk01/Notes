const fs = require('fs');
const fsP = require('fs').promises;
const path = require('path');

const unorganiseDir = path.join(__dirname, 'Unorganised');
const organisedDir = path.join(__dirname, 'Organised');

async function createDirectory(dirPath) {
  try {
    // Create directory if it doesn't exist - ( if already available then it doesn't create and doesn't throw error )
    await fsP.mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
  }
}

function logMessage(fileName, movedDir) {
  // Extract only the folder name from movedDir path
  const folderName = path.basename(movedDir);

  console.log(`* File ${fileName} moved to folder ${folderName}`);
}

// (rename) a file from oldPath to newPath - Moving operation
async function moveFile(oldPath, newPath) {
  try {
    await fsP.rename(oldPath, newPath);
    logMessage(path.basename(oldPath), newPath);
  } catch (err) {
    console.error('Error moving file:', err);
  }
}

async function readDirectory() {
  try {
    const files = await fsP.readdir(unorganiseDir);

    // Process each file
    for (const file of files) {
      const oldFilePath = path.join(unorganiseDir, file);

      // Check if it's a file, skip directories
      const stat = await fsP.stat(oldFilePath);
      if (!stat.isFile()) continue;

      // Extract extension; handle files without extension safely
      const ext = path.extname(file).slice(1) || 'others';

      // Create extension folder inside organisedDir
      const targetDir = path.join(organisedDir, ext);
      await createDirectory(targetDir);

      // Define new path for file
      const newFilePath = path.join(targetDir, file);

      // Move file
      await moveFile(oldFilePath, newFilePath);
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

readDirectory();
