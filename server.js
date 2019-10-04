const next = require('next');
const express = require('express');

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Nice permalinks for pages.
  // Sets up a custom route, that then uses next.js to render the about page.
//   server.get('/about', (req, res) => {
//     return app.render(req, res, '/about');
//   });

  // For all other routes, use next.js.
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', err => {
    if (err) throw err;
    console.log(`${'\u2705'}  Ready on http://localhost:${port}`);
  });
});