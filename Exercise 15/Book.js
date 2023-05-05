const fs = require('fs');

const bookData = fs.readFileSync('Book.json', 'utf8');

const book = JSON.parse(bookData);
  
  console.log(`Title: ${book.title}`);
  console.log(`Description: ${book.description}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  