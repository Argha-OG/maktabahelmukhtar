const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// ── CORS ─────────────────────────────────────────────────────────────────
app.use(cors({
    origin: [
        'https://maktabahelmukhtar.vercel.app',
        'http://localhost:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.options('*', cors()); // Pre-flight for all routes

app.use(express.json({ limit: '10mb' }));

// ── MongoDB Connection (cached for Vercel serverless) ────────────────────
let isConnected = false;

async function connectDB() {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            bufferCommands: false,
        });
        isConnected = true;
        console.log('✅ MongoDB connected.');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        throw err;
    }
}

// Run DB connection before every request
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ success: false, error: 'Database connection failed.' });
    }
});

// ── Routes ───────────────────────────────────────────────────────────────
const booksRouter = require('./routes/books');
const feedRouter = require('./routes/feed');
const authorsRouter = require('./routes/authors');
const adsRouter = require('./routes/ads');
const galleryRouter = require('./routes/gallery');
const leadsRouter = require('./routes/leads');

// Public routes
app.use('/api/books', booksRouter);
app.use('/api/feed', feedRouter);

// Admin-scoped routes
app.use('/api/admin/authors', authorsRouter);
app.use('/api/admin/ads', adsRouter);
app.use('/api/admin/gallery', galleryRouter);
app.use('/api/admin/leads', leadsRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running.', dbConnected: isConnected });
});

// ── Export / Listen ───────────────────────────────────────────────────────
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}
