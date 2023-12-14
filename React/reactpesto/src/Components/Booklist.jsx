import React from 'react'
import Book from './Book';
import BookForm from './BookForm';
import "./Bookform.css"

function Booklist() {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];
      
  return (
    <div className="booklist-container">
        <h1>Booklist</h1>
        <BookForm/>
        <ul className="book-list">
            {books.map((book,index)=>(
                // <li key={index}>{book.title} by {book.author}, {book.year}</li>
                <Book key={index} title={book.title} author={book.author} year={book.year}/>
            ))}
        </ul>
    </div>
  )
}

export default Booklist