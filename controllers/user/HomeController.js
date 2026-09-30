const Book = require('../../models/Book')
async function getBooks(req, res) {
    try {
        let books = await Book.find({});
        console.log(books, 'books')
        res.status(200).send({ data: books })
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'Something went wrong' })
    }
}
module.exports = {
    getBooks
}