

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// // const morgan = require('morgan');
// const helmet = require('helmet');
// const connectDB = require('./config/connectDB');

// // Load environment variables first
// // dotenv.config();
// require('dotenv').config();


// // Connect to MongoDB
// connectDB();

// // Middleware setup
// app.use(cors({
//   credentials: true,
//   origin: process.env.FRONTEND_URL || "http://localhost:5173",
//    allowedHeaders: ['Content-Type', 'Authorization']
// }));
















// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const helmet = require('helmet');
// const connectDB = require('./config/connectDB');

// // Load environment variables
// dotenv.config();
// connectDB();

// // Middleware
// app.use(cors({
//   credentials: true,
//   origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Helmet for security
// app.use(helmet({
//   crossOriginResourcePolicy: false,
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       connectSrc: ["'self'", 'https://api.opencagedata.com', '*'],
//       imgSrc: ["'self'", 'data:', 'blob:', '*'],
//       scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", '*'],
//       styleSrc: ["'self'", "'unsafe-inline'", '*'],
//       objectSrc: ["'none'"],
//       frameAncestors: ["'self'"]
//     }
//   }
// }));

// // MIME fix for manifest
// app.use((req, res, next) => {
//   if (req.url.endsWith('.webmanifest')) {
//     res.type('application/manifest+json');
//   }
//   next();
// });

// // ✅ Serve static files from Vite build output (Backend/public)
// const frontendPath = path.join(__dirname, 'public');
// app.use(express.static(frontendPath));

// // ✅ API Routes
// app.use('/api/auth', require('./routes/auth.route'));
// app.use('/api/user', require('./routes/user.route'));
// app.use('/api/product', require('./routes/product.route'));
// app.use('/api/booking', require('./routes/booking.route'));
// app.use('/api/washerman', require('./routes/washerman.route'));
// app.use('/api/show', require('./routes/available.route'));
// app.use('/api', require('./routes/predefine.route'));
// app.use('/api', require('./routes/contact.routes'));
// app.use('/api', require('./routes/location.route'));
// app.use('/api', require('./routes/dashboard.route'));
// app.use('/api/services', require('./routes/service.route'));

// // ✅ Fallback to index.html for SPA routing
// app.get(/^\/(?!api).*/, (req, res) => {
//   res.sendFile(path.join(frontendPath, 'index.html'));
// });

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`🚀 Server running on port ${port}`);
// });







// Backend/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
const connectDB = require('./config/connectDB');

dotenv.config();
connectDB();

// Performance
app.use(compression());

// CORS (kept simple; same-origin doesn’t need CORS)
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL // optional; can be your Render URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Parsers & security
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet({
  crossOriginResourcePolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", 'https://api.opencagedata.com', '*'],
      imgSrc: ["'self'", 'data:', 'blob:', '*'],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", '*'],
      styleSrc: ["'self'", "'unsafe-inline'", '*'],
      objectSrc: ["'none'"],
      frameAncestors: ["'self'"]
    }
  }
}));

// Fix manifest type (for PWA builds)
app.use((req, res, next) => {
  if (req.url.endsWith('.webmanifest')) res.type('application/manifest+json');
  next();
});

// --- Serve the React build from /public ---
const frontendPath = path.join(__dirname, 'public');
app.use(express.static(frontendPath, {
  maxAge: '1y',
  immutable: true
}));

// --- API routes ---
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/user', require('./routes/user.route'));
app.use('/api/product', require('./routes/product.route'));
app.use('/api/booking', require('./routes/booking.route'));
app.use('/api/washerman', require('./routes/washerman.route'));
app.use('/api/show', require('./routes/available.route'));
app.use('/api', require('./routes/predefine.route'));
app.use('/api', require('./routes/contact.routes'));
app.use('/api', require('./routes/location.route'));
app.use('/api', require('./routes/dashboard.route'));
app.use('/api/services', require('./routes/service.route'));
app.use('/api', require('./routes/address.route'));

// (optional) simple health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// --- SPA fallback (must be after API routes) ---
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// --- start ---
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
