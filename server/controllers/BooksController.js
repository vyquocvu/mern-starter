'use strict';

import Book from '../models/Book';

class BooksController {
  getAll(projection, options) {
    // const options = {
    //   skip: 0,
    //   limit: 20,
    // }
    // const projection = "";
    return new Promise((resolve, reject) => {
      Book.find({}, projection, options)
      .then(books => resolve(books))
      .catch(error => reject(error))
    });
  }

  getOne(_id) {
    return new Promise((resolve, reject) => {
      Book.find({ _id }, projection, options)
      .then(books => resolve(books))
      .catch(error => reject(error))
    });
  }

  create(book) {
    return new Promise((resolve, reject) => {
      Book.insert(book)
      .then(book => resolve(book))
      .catch(error => reject(error))
    });
  }

  update(_id, book) {
    return new Promise((resolve, reject) => {
      Book.findByIdAndUpdate({ _id }, { $set: book })
      .then(book => resolve(book))
      .catch(error => reject(error))
    });
  }

  delete(_id) {
    return new Promise((resolve, reject) => {
      Book.remove({ _id })
      .then(book => resolve(book))
      .catch(error => reject(error))
    });
  }
}

export default new BooksController();
