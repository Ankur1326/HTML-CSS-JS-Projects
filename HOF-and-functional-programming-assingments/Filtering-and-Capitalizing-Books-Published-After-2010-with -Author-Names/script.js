const books = [
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 2012
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2015
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005
    }
];

const filteredBooks = books.filter((book) => book.year <= 2010);
// console.log(filteredBooks);

const formatedBooks = filteredBooks.map((book) => {
     capitalizedAuthor = book.author.toUpperCase()
     return {
        book: book.title,
        author: capitalizedAuthor,
        year: book.year
     }
    })
console.log(formatedBooks);

// Output ->
 /*
[
    {
      book: 'The Catcher in the Rye',
      author: 'J.D. SALINGER',
      year: 1951
    },
    { book: '1984', author: 'GEORGE ORWELL', year: 1949 },
    {
      book: 'The Girl with the Dragon Tattoo',
      author: 'STIEG LARSSON',
      year: 2005
    }
  ]
*/
