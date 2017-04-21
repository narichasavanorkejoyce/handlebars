'use strict';

const showBooksTemplate = require('../templates/book-listing.handlebars');

const getBooksSuccess = (data) => {
  let showBooksHtml = showBooksTemplate({ books: data.books });
  console.log(data);
  $('.content').append(showBooksHtml);
  $('.remove-button').on('click', function () {
    $(this).parent().parent().hide()
  })
};

const clearBooks = () => {
  $('.content').empty();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure
};
