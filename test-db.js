const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://arghacypher_db_user:U67cD3nkUvOUbCUC@maktabahelmukhtar.iuib2fl.mongodb.net/?appName=maktabahelmukhtar';

async function run() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const Book = mongoose.models.Book || mongoose.model('Book', new mongoose.Schema({}, { strict: false }), 'books');

        const books = await Book.find({}).limit(5).lean();
        console.log('Books Sample:', JSON.stringify(books, null, 2));

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
