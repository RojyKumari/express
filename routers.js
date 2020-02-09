const express = require('express');
// const keys = require('lodash/keys');

const bookRouter = express.Router();

bookRouter.route('/books')
  .post((req, res) => {
    const reqBody = req.body;
    return res.json(reqBody);
  })
  .get((req, res) => {
    let query = 'nothing';
    if (req.query.genre) {
      query = req.query.genre;
    }
    const myBook = {
      hello: 'This is my book',
      query,
    };
    res.json(myBook);
  });

bookRouter.route('/books/:bookId').get((req, res) => {
  let bookId = 'default-id';
  if (req.params.bookId) {
    bookId = req.params.bookId;
  }
  const myBook = {
    id: bookId,
    name: 'xyz',
  };
  res.json(myBook);
});

module.exports = {
  bookRouter,
};
