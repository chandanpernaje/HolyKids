import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import handler from './api/send-email.js';

function apiDevPlugin() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/api/send-email' || url === '/api/contact') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch {
              req.body = {};
            }

            // Wrap res.status to return res for chaining
            const origSetHeader = res.setHeader.bind(res);
            res.setHeader = (name, value) => {
              try {
                origSetHeader(name, value);
              } catch {}
              return res;
            };
            res.status = (code) => {
              res.statusCode = code;
              return res;
            };
            res.json = (data) => {
              if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
              }
              res.end(JSON.stringify(data));
              return res;
            };
            try {
              await handler(req, res);
            } catch (err) {
              if (!res.headersSent) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            }
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDevPlugin()]
});
