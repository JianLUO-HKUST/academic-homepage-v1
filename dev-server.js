const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".json": "application/json; charset=utf-8"
};

function send(res, status, content, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(content);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const requested = urlPath === "/" ? "/index.html" : urlPath;
  const safePath = path.normalize(requested).replace(/^([.][.][/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      send(res, 404, "Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, data, mimeTypes[ext] || "application/octet-stream");
  });
});

server.listen(PORT, () => {
  console.log(`Academic homepage is running at http://localhost:${PORT}`);
});
