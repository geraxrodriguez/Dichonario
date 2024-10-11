const mongoose = require('mongoose')

const DichoSchema = new mongoose.Schema({
    dicho: {
        type: String,
        required: true,
    },
    literalMeaning: {
        type: String,
        required: true,
    },
    actualMeaning: {
        type: String,
        required: true,
    },
    examples: {
        type: Array,
        required: true,
    },
    related: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false,
    },
    history: {
        type: String,
        required: false,
    },
}, { strict: false }); // allows us to create dynamic schemas, e.g. add new fields that aren't in schema

module.exports = mongoose.model('Dicho', DichoSchema)

// Define a model using the schema
// Mongoose will look for a collection named 'books' by default
// const Book = mongoose.model('Book', bookSchema);
// If you want to specify a different collection name, you can do so
// const CustomBook = mongoose.model('CustomBook', bookSchema, 'my_books');
// In this example, Mongoose will use the 'my_books' collection instead of the default 'custombooks'
