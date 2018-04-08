import book from './book'

/* GET home page. */

export default (app, passport) => {
  app.use('/api/v1.0.0/books', book);
}
