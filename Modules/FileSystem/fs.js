// fs - file System

// fs module in Node.js allows you to interact with the file system on your machine

const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');

// Three Approaches:
// Sync             : Immediate Result
// Async            : Error-first Callback
// Promise-based    : Used With async/await (from fs.promises)

// -----------------------------------------------------------------------------
// READ FILE
// -----------------------------------------------------------------------------

// SYNC
const dataSync = fs.readFileSync('example.txt', 'utf8');
console.log('Sync Read:', dataSync);

// ASYNC
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) return console.error('Async Read Error:', err);
  console.log('Async Read:', data);
});

// PROMISE
(async () => {
  try {
    const data = await fsp.readFile('example.txt', 'utf8');
    console.log('Promise Read:', data);
  } catch (err) {
    console.error('Promise Read Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// WRITE FILE
// -----------------------------------------------------------------------------

// SYNC
fs.writeFileSync('writeSync.txt', 'This is written synchronously');

// ASYNC
fs.writeFile('writeAsync.txt', 'This is written asynchronously', err => {
  if (err) console.error('Async Write Error:', err);
});

// PROMISE
(async () => {
  try {
    await fsp.writeFile('writePromise.txt', 'Written using Promise API');
  } catch (err) {
    console.error('Promise Write Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// APPEND FILE
// -----------------------------------------------------------------------------

// SYNC
fs.appendFileSync('append.txt', '\nAppended sync text');

// ASYNC
fs.appendFile('append.txt', '\nAppended async text', err => {
  if (err) console.error('Async Append Error:', err);
});

// PROMISE
(async () => {
  try {
    await fsp.appendFile('append.txt', '\nAppended using promise');
  } catch (err) {
    console.error('Promise Append Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// DELETE FILE
// -----------------------------------------------------------------------------

// SYNC
fs.unlinkSync('deleteMeSync.txt');

// ASYNC
fs.unlink('deleteMeAsync.txt', err => {
  if (err) console.error('Async Delete Error:', err);
});

// PROMISE
(async () => {
  try {
    await fsp.unlink('deleteMePromise.txt');
  } catch (err) {
    console.error('Promise Delete Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// RENAME / MOVE FILE
// -----------------------------------------------------------------------------

// SYNC
fs.renameSync('oldName.txt', 'newName.txt');

// ASYNC
fs.rename('oldAsync.txt', 'newAsync.txt', err => {
  if (err) console.error('Async Rename Error:', err);
});

// PROMISE
(async () => {
  try {
    await fsp.rename('oldPromise.txt', 'newPromise.txt');
  } catch (err) {
    console.error('Promise Rename Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// CREATE DIRECTORY
// -----------------------------------------------------------------------------

// SYNC
fs.mkdirSync('newFolderSync');

// ASYNC
fs.mkdir('newFolderAsync', err => {
  if (err) console.error('Async mkdir Error:', err);
});

// PROMISE
(async () => {
  try {
    await fsp.mkdir('newFolderPromise');
  } catch (err) {
    console.error('Promise mkdir Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// READ DIRECTORY
// -----------------------------------------------------------------------------

// SYNC
const filesSync = fs.readdirSync('.');
console.log('Files (Sync):', filesSync);

// ASYNC
fs.readdir('.', (err, files) => {
  if (err) console.error('Async ReadDir Error:', err);
  else console.log('Files (Async):', files);
});

// PROMISE
(async () => {
  try {
    const files = await fsp.readdir('.');
    console.log('Files (Promise):', files);
  } catch (err) {
    console.error('Promise ReadDir Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// FILE META: STATS
// -----------------------------------------------------------------------------

// SYNC
const statsSync = fs.statSync('example.txt');
console.log('Stats (Sync):', statsSync);

// ASYNC
fs.stat('example.txt', (err, stats) => {
  if (err) console.error('Async Stats Error:', err);
  else console.log('Stats (Async):', stats);
});

// PROMISE
(async () => {
  try {
    const stats = await fsp.stat('example.txt');
    console.log('Stats (Promise):', stats);
  } catch (err) {
    console.error('Promise Stats Error:', err);
  }
})();

// -----------------------------------------------------------------------------
// FILE WATCHING
// -----------------------------------------------------------------------------

fs.watch('example.txt', (eventType, filename) => {
  console.log(`File ${filename} changed: ${eventType}`);
});

// -----------------------------------------------------------------------------
// CREATE READ STREAM
// -----------------------------------------------------------------------------

const readStream = fs.createReadStream('example.txt', 'utf8');
readStream.on('data', chunk => {
  console.log('Read Stream Chunk:', chunk);
});

// -----------------------------------------------------------------------------
// CREATE WRITE STREAM
// -----------------------------------------------------------------------------

const writeStream = fs.createWriteStream('streamOutput.txt');
writeStream.write('First line from stream\n');
writeStream.end('Final line from stream');

writeStream.on('finish', () => {
  console.log('Write stream finished.');
});
