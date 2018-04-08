import express from 'express';
import Book from '../../models/Book.js';

const router = express.Router();

/* GET ALL BOOKS */
router.get('/', (req, res, next) => {
  Book.find( (err, products) => {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', (req, res, next) => {
  Book.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('', (req, res, next) => {

  Book.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, post)  => {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', (req, res, next) => {
  Book.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

export default router;