const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

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
app.options('*', cors());
app.use(express.json({ limit: '10mb' }));

// ── Health check (no DB required) ────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running.' });
});

// ── MongoDB Connection (cached for serverless) ──────────────────────────
let isConnected = false;

async function connectDB() {
    if (isConnected) return;
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not defined.');
    await mongoose.connect(uri, { bufferCommands: false });
    isConnected = true;
}

// Prevent unhandled 'error' events from crashing the process
mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
    isConnected = false;
});

// DB connection middleware (runs before data routes)
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('DB connect failed:', err.message);
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

app.use('/api/books', booksRouter);
app.use('/api/feed', feedRouter);
app.use('/api/admin/authors', authorsRouter);
app.use('/api/admin/ads', adsRouter);
app.use('/api/admin/gallery', galleryRouter);
app.use('/api/admin/leads', leadsRouter);

// ── Export / Listen ───────────────────────────────────────────────────────
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}
