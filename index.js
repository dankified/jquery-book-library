	const books = [{id: 1, title: "Moby Dick", author: "Herman Melville"},
	{id: 2, title: "Harry Potter", author: "J.K Rowling"}, {id: 3, title: "Crime and Punishment", author: "Dostoevsky"}, {id: 4, title: "James and the giant peach", author: "Roald Dahl"}];

	//require the express library
	const express = require('express');

	//Initialize an express application
	const app = express();

	app.use(express.static(`${__dirname}/public`));

	//Create a route that on a GET request to the root url ('/') will send all the books.
	app.get('/', (req, res) => {
		res.send(books)
	})

	//Route that on a GET request to url (/books) will send all the books
	app.get('/books', (req, res) => {
		res.send(books);
	})

	//Route that on a GET request to (/books/:bookTitle) will find a book with title === bookTitle and return it. In case there's no book with that title the response will return a string with value "Book not found".

	app.get('/books/:bookTitle', (req, res) => {
		let book = books.find((book) => {
			if(book.title === req.params.bookTitle) {
				return book;
			}
		})
		book ? res.send(book) : res.send("Book not found");
	})

	//Set up app to listen on a port
	const PORT = process.env.PORT || 5000;

	app.listen(PORT, () => console.log(`Listening on port ${PORT}`));