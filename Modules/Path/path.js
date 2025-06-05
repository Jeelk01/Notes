// path - Path Utilities

// Node.js path module provides utilities for working with file and directory paths

const path = require('path');

// -----------------------------------------------------------------------------
// BASENAME
// -----------------------------------------------------------------------------

const base = path.basename('/users/admin/file.txt');
console.log('basename:', base); // file.txt

// with extension removal
const baseNoExt = path.basename('/users/admin/file.txt', '.txt');
console.log('basename without ext:', baseNoExt); // file

// -----------------------------------------------------------------------------
// DIRNAME
// -----------------------------------------------------------------------------

const dir = path.dirname('/users/admin/file.txt');
console.log('dirname:', dir); // /users/admin

// -----------------------------------------------------------------------------
// EXTNAME
// -----------------------------------------------------------------------------

const ext = path.extname('/users/admin/file.txt');
console.log('extname:', ext); // .txt

// -----------------------------------------------------------------------------
// JOIN
// -----------------------------------------------------------------------------

const joined = path.join('/users', 'admin', 'docs/file.txt');
console.log('join:', joined); // /users/admin/docs/file.txt

// handles .. and . correctly
const joinedRelative = path.join('/users/admin', '../public', './site.html');
console.log('join (normalized):', joinedRelative); // /users/public/site.html

// -----------------------------------------------------------------------------
// RESOLVE
// -----------------------------------------------------------------------------

const resolved = path.resolve('docs', 'file.txt');
console.log('resolve (absolute):', resolved); // absolute path to docs/file.txt

const resolvedFromRoot = path.resolve('/root', 'sub', 'file.txt');
console.log('resolve from root:', resolvedFromRoot); // /root/sub/file.txt

// -----------------------------------------------------------------------------
// NORMALIZE
// -----------------------------------------------------------------------------

const messyPath = '/foo/bar//baz/asdf/quux/..';
const normalized = path.normalize(messyPath);
console.log('normalize:', normalized); // /foo/bar/baz/asdf

// -----------------------------------------------------------------------------
// ISABSOLUTE
// -----------------------------------------------------------------------------

console.log('isAbsolute(/foo):', path.isAbsolute('/foo')); // true
console.log('isAbsolute(foo):', path.isAbsolute('foo'));   // false

// -----------------------------------------------------------------------------
// RELATIVE
// -----------------------------------------------------------------------------

const relPath = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log('relative:', relPath); // ../../impl/bbb

// -----------------------------------------------------------------------------
// PARSE
// -----------------------------------------------------------------------------

const parsed = path.parse('/home/user/dir/file.txt');
console.log('parse:', parsed);
// {
//   root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// to format back from object
const formatted = path.format(parsed);
console.log('format:', formatted); // /home/user/dir/file.txt
