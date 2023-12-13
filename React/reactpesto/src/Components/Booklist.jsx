import React from 'react'
import Book from './Book';

function Booklist() {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];
    const style={"justify-content": "center"}
      
  return (
    <div style={style}>
        <h1>Booklist</h1>
        <ul>
            {books.map((book,index)=>(
                // <li key={index}>{book.title} by {book.author}, {book.year}</li>
                <Book title={book.title} author={book.author} year={book.year}/>
            ))}
        </ul>
    </div>
  )
}

export default Booklist