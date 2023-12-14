import React from 'react'
import Book from './Book';
import BookForm from './BookForm';
import "./Bookform.css";
import { useState } from 'react';

function Booklist() {
    // const books = [
    //     { title: 'Book 1', author: 'Author 1', year: 2020 },
    //     { title: 'Book 2', author: 'Author 2', year: 2018 },
    //     { title: 'Book 3', author: 'Author 3', year: 2022 },
    //     // Add more books if you'd like
    //   ];
     const [books,setBooks]=useState([]); 
     const addBook=(book)=>{
        setBooks([...books, book]);
     }
     const deleteBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
      };
  return (
    <div className="booklist-container">
        <h1>Booklist</h1>
        <BookForm addBook={addBook}/>
        {
            books?.length<1 ?
            <p>No Books Yet!</p>:
            <ul className="book-list">
            {books.map((book,index)=>(
                // <li key={index}>{book.title} by {book.author}, {book.year}</li>
                <Book key={index} title={book.title} author={book.author} year={book.year} deleteBook={()=>deleteBook(index)}/>
            ))}
        </ul>

        }
    </div>
  )
}

export default Booklist