import axios from 'helpers/axios';
import {
  FETCH_BOOKS,
  CREATE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  GET_A_BOOK
} from './constants';

export const createBook = (book) => (dispatch) => new Promise((resolve) => {
  axios.post('/books', { book })
  .then((res) => res.data || {})
  .then(({ success, data }) => {
    if (success) return resolve(dispatch({ data, type: CREATE_BOOK }));
    return resolve(dispatch({ data: [], type: CREATE_BOOK }));
  })
  .catch((e) => {
    return resolve(dispatch({ data: [], type: CREATE_BOOK }));
  })
});

export const getBook = (book) => (dispatch) => new Promise((resolve) => {
  axios.patch(`/books/${book._id}`)
  .then((res) => res.data || {})
  .then(({ success, data }) => {
    if (success) return resolve(dispatch({ data, type: GET_A_BOOK }));
    return resolve(dispatch({ data: [], type: GET_A_BOOK }));
  })
  .catch((e) => {
    return resolve(dispatch({ data: [], type: GET_A_BOOK }));
  })
});

export const updateBook = (book) => (dispatch) => new Promise((resolve) => {
  axios.patch(`/books/${book._id}`)
  .then((res) => res.data || {})
  .then(({ success, data }) => {
    if (success) return resolve(dispatch({ data, type: UPDATE_BOOK }));
    return resolve(dispatch({ data: [], type: UPDATE_BOOK }));
  })
  .catch((e) => {
    return resolve(dispatch({ data: [], type: UPDATE_BOOK }));
  })
});

export const fetchBooks = () => (dispatch) => new Promise((resolve) => {
  axios.get('/books')
  .then((res) => res.data || {})
  .then(({ success, data }) => {
    if (success) return resolve(dispatch({ data, type: FETCH_BOOKS }));
    return resolve(dispatch({ data: [], type: FETCH_BOOKS }));
  })
  .catch((e) => {
    return resolve(dispatch({ data: [], type: FETCH_BOOKS }));
  })
});

export const deleteBook = (id) => (dispatch) => new Promise((resolve) => {
  axios.delete(`/books/${id}`)
  .then((res) => res.data || {})
  .then(({ success, data }) => {
    if (success) return resolve(dispatch({ data, type: DELETE_BOOK }));
    return resolve(dispatch({ data: [], type: DELETE_BOOK }));
  })
  .catch((e) => {
    return resolve(dispatch({ data: [], type: DELETE_BOOK }));
  })
});
