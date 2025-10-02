// server.js
const express = require('express');
const app = express();

app.use(express.static('public')); // serves the client page (below) from /public

// Endpoint that sets a cookie and redirects to index.html
app.get('/set-cookie', (req, res) => {
  // Example 1: normal cookie readable by JS
  res.cookie('visible_cookie', 'hello-from-server', {
    maxAge: 24 * 3600 * 1000,
    path: '/',
    httpOnly: false,   // readable by document.cookie
    sameSite: 'Lax'
  });

  // Example 2: HttpOnly cookie (not readable by document.cookie)
  res.cookie('secret_cookie', 'secret-value', {
    maxAge: 24 * 3600 * 1000,
    path: '/',
    httpOnly: true,    // NOT readable by JS
    sameSite: 'Lax'
  });

  res.send('Cookies set. <a href="/">Go back</a>');
});

// Endpoint that returns request cookies (server-side view)
app.get('/show-server-cookies', (req, res) => {
  res.json({ receivedCookies: req.cookies || {}, headerCookies: req.get('cookie') || '' });
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
