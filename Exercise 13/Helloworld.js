console.log('Hello, world!');

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are cute.');
console.dir(result); // Score: -2, Comparati
ve: -0.666 