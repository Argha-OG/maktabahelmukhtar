const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Ensure uploads directory exists for file uploads proxied from frontend
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Successfully connected to MongoDB Atlas.'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// ── Routes ──────────────────────────────────────────────────────────────
const booksRouter = require('./routes/books');
const feedRouter = require('./routes/feed');
const authorsRouter = require('./routes/authors');
const adsRouter = require('./routes/ads');
const galleryRouter = require('./routes/gallery');
const leadsRouter = require('./routes/leads');

// Public routes (read access)
app.use('/api/books', booksRouter);
app.use('/api/feed', feedRouter);

// Admin-scoped routes (write access authenticated via NextAuth in the frontend proxy)
app.use('/api/admin/authors', authorsRouter);
app.use('/api/admin/ads', adsRouter);
app.use('/api/admin/gallery', galleryRouter);
app.use('/api/admin/leads', leadsRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend server is running.' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
