// Used ChatGPT for generation of file below postbuild for finding dynamic name of css hash name

const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');
const cssFolder = path.join(buildPath, 'static', 'css');
const indexHtmlPath = path.join(buildPath, 'index.html');

// 1. Find hashed CSS file
const cssFile = fs.readdirSync(cssFolder).find(f =>
  f.endsWith('.css') && !f.endsWith('.css.map')
);

if (!cssFile) {
  console.error('❌ No CSS file found in /build/static/css/');
  process.exit(1);
}

console.log(`✅ Found CSS file: ${cssFile}`);

// 2. Read index.html contents
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 3. Remove default render-blocking <link rel="stylesheet" ...>
html = html.replace(
  new RegExp(`<link[^>]+href=["']/static/css/${cssFile}["'][^>]+rel=["']stylesheet["'][^>]*>`, 'g'),
  ''
);

// 4. Remove any duplicate preload blocks from previous runs
html = html.replace(
  new RegExp(`<link[^>]+href=["']/static/css/${cssFile}["'][^>]+as=["']style["'][^>]*>`, 'g'),
  ''
);
html = html.replace(
  new RegExp(`<noscript><link[^>]+href=["']/static/css/${cssFile}["'][^>]+></noscript>`, 'g'),
  ''
);

// 5. Inject preload+noscript version before </head>
const preloadBlock = `<link rel="preload" href="/static/css/${cssFile}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="/static/css/${cssFile}"></noscript>`;
html = html.replace('</head>', `  ${preloadBlock}\n</head>`);

// 6. Write updated file back to disk
fs.writeFileSync(indexHtmlPath, html);
console.log('✅ Replaced blocking CSS with async preload strategy.');