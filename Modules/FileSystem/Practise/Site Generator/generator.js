const fs = require('fs');
const path = require('path');
const fsp = require('fs').promises;

const contentDir = path.join(__dirname, 'content');
const outputDir = path.join(__dirname, 'output');

// Converts .md content to HTML line by line
function htmlGenerator(line) {
     if (line.startsWith('# ')) {
          return `<h1>${line.slice(2)}</h1>`;
     } else if (line.startsWith('## ')) {
          return `<h2>${line.slice(3)}</h2>`;
     } else if (line.startsWith('- ')) {
          return `<li>${line.slice(2)}</li>`;
     } else if (line.trim() === '') {
          return ''; // blank line
     } else {
          return `<p>${line}</p>`;
     }
}

// Writes the final HTML content to an output file
function createHtml(filename, htmlLines) {
     const htmlContent = htmlLines.join('\n');

     // Wrap content in basic HTML structure
     const fullHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${filename}</title>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

     const outputPath = path.join(outputDir, filename.replace('.md', '.html'));

     fs.writeFile(outputPath, fullHtml, (err) => {
          if (err) return console.error(`Error writing ${filename}:`, err);
          console.log(`✅ Created: ${outputPath}`);
     });
}

// Reads an individual .md file, line by line
function readFile(filePath) {
     fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) return console.error(`Error reading ${filePath}:`, err);

          const lines = data.split('\n');
          const htmlLines = [];

          let insideList = false;

          for (let line of lines) {
               const html = htmlGenerator(line);

               if (html.startsWith('<li>')) {
                    if (!insideList) {
                         htmlLines.push('<ul>');
                         insideList = true;
                    }
                    htmlLines.push(html);
               } else {
                    if (insideList) {
                         htmlLines.push('</ul>');
                         insideList = false;
                    }
                    if (html) htmlLines.push(html);
               }
          }

          if (insideList) htmlLines.push('</ul>');

          const filename = path.basename(filePath);
          createHtml(filename, htmlLines);
     });
}

// Reads the content/ directory and processes each .md file
async function readDirectory() {
     try {
          let files = await fsp.readdir(contentDir);

          // Only keep .md files
          files = files.filter((file) => file.endsWith('.md'));

          // Read each file
          files.forEach((file) => {
               const filePath = path.join(contentDir, file);
               readFile(filePath);
          });
     } catch (err) {
          console.error('Error reading directory:', err);
     }
}

// Run the script
readDirectory();
