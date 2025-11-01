// Used ChatGPT for generation of postbuild script to optimize CSS and preload LCP image

const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');
const cssFolder = path.join(buildPath, 'static', 'css');
const mediaFolder = path.join(buildPath, 'static', 'media');
const indexHtmlPath = path.join(buildPath, 'index.html');

// 1. Read original index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// ==========================
// === Handle CSS Preload ===
// ==========================
const cssFile = fs.readdirSync(cssFolder).find(f =>
  f.endsWith('.css') && !f.endsWith('.css.map')
);

if (cssFile) {
  console.log(`✅ Found CSS file: ${cssFile}`);

  // Remove existing <link rel="stylesheet"> if present
  html = html.replace(
    new RegExp(`<link[^>]+href=["']/static/css/${cssFile}["'][^>]+rel=["']stylesheet["'][^>]*>`, 'g'),
    ''
  );

  // Remove previous <preload> or <noscript> blocks
  html = html.replace(
    new RegExp(`<link[^>]+href=["']/static/css/${cssFile}["'][^>]+as=["']style["'][^>]*>`, 'g'),
    ''
  );
  html = html.replace(
    new RegExp(`<noscript><link[^>]+href=["']/static/css/${cssFile}["'][^>]+></noscript>`, 'g'),
    ''
  );

  // Inject optimized preload + noscript fallback
  const preloadBlock = `<link rel="preload" href="/static/css/${cssFile}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="/static/css/${cssFile}"></noscript>`;
  html = html.replace('</head>', `  ${preloadBlock}\n</head>`);
  console.log('✅ Injected async CSS preload strategy.');
} else {
  console.warn('❌ No CSS file found in /build/static/css/');
}

// ==========================
// === Handle LCP Preload ===
// ==========================
const lcpImage = fs.readdirSync(mediaFolder).find(f =>
  f.includes('CreateMobileHighRes') && f.endsWith('.webp')
);

if (lcpImage) {
  const preloadImg = `<link rel="preload" as="image" href="/static/media/${lcpImage}" fetchpriority="high">`;

  // Remove old preloads for this image if any
  html = html.replace(
    new RegExp(`<link[^>]+href=["']/static/media/${lcpImage}["'][^>]*>`, 'g'),
    ''
  );

  html = html.replace('</head>', `  ${preloadImg}\n</head>`);
  console.log(`✅ Preloaded LCP image: ${lcpImage}`);
} else {
  console.warn('⚠️ LCP image not found in /static/media/');
}

// ==========================
// === Save Final HTML Back ===
// ==========================
fs.writeFileSync(indexHtmlPath, html);
console.log('✅ index.html updated successfully.');