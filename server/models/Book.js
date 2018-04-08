import mongoose from 'mongoose';

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_date: { type: Date },
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

export default mongoose.model('Book', BookSchema);
