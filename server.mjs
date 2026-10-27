import http from 'node:http';
import { readFile } from 'node:fs/promises';
// An explicit public-file list keeps original client documents off the server.
const files = new Map([
  ['/', ['public/index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['public/index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['public/styles.css', 'text/css; charset=utf-8']],
  ['/app.js', ['public/app.js', 'text/javascript; charset=utf-8']],
  ['/assets/magazine-05.webp', ['public/assets/magazine-05.webp', 'image/webp']],
  ['/assets/podcast.jpeg', ['public/assets/podcast.jpeg', 'image/jpeg']],
  ['/assets/sports.webp', ['public/assets/sports.webp', 'image/webp']],
]);
const server = http.createServer(async (req, res) => {
  const file = files.get(new URL(req.url, 'http://localhost').pathname);
  if (!file || !['GET', 'HEAD'].includes(req.method)) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const body = await readFile(new URL(file[0], import.meta.url));
    res.writeHead(200, {'Content-Type': file[1], 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store'});
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(500); res.end('Unable to load preview asset'); }
});
server.listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
