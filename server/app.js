import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';

// import book from './routes/api.v1.0.0/book';
import mongoose from 'mongoose';
import apiRoutes from './routes/api.v1.0.0';

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mern', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '../build')));

app.use(passport.initialize());
app.use(passport.session());
apiRoutes(app, passport);
// app.use('/api/v1.0.0/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;