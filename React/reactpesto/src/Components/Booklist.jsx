import React, { createContext, useEffect } from 'react'
import Book from './Book';
import BookForm from './BookForm';
import "./Bookform.css";
import { useState } from 'react';
import useBookFilter from '../Hooks/useBookFilter';

export const themeContext = createContext();
const currentTheme = localStorage.getItem("theme");
const initialTheme = currentTheme ? currentTheme : "light";
function Booklist() {
    const [theme, setTheme] = useState(initialTheme);
    const themeHandler = () => {
        theme == "light" ? setTheme("dark") : setTheme("light")
    }
    // const books = [
    //     { title: 'Book 1', author: 'Author 1', year: 2020 },
    //     { title: 'Book 2', author: 'Author 2', year: 2018 },
    //     { title: 'Book 3', author: 'Author 3', year: 2022 },
    //     // Add more books if you'd like
    //   ];
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    const [searchWord, setSearchWord] = useState('');
    const [books, setBooks] = useState([]);
    const addBook = (book) => {
        setBooks([...books, book]);
    }
    const deleteBook = (index) => {
        const updatedBooks = [...books];
        updatedBooks.splice(index, 1);
        setBooks(updatedBooks);
        //console.log("deleted")
    };
    let filteredBooks = useBookFilter(books, searchWord);
    //console.log(filteredBooks)
    //pagination
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginateBooks = filteredBooks.slice(startIndex, endIndex);
    const totalPage = Math.ceil(filteredBooks.length / itemsPerPage);
    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }
    useEffect(() => {
        //console.log(books)
    }, [books])
    return (
        <div className={`main-${theme}`}>
            <div className={`navbar-${theme}`}>
                <h1>Booklist</h1>
                <input
                    type='text'
                    placeholder='Search by title'
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)
                    } />
                <button onClick={themeHandler}>Switch theme</button>
            </div>
            <div className="booklist-container">
                <themeContext.Provider value={{ theme }}>
                    <BookForm addBook={addBook} />

                    {
                        books?.length < 1 ?
                            <p>No Books Yet!</p> :
                            <ul className="book-list">
                                {paginateBooks.map((book, index) => (
                                    // <li key={index}>{book.title} by {book.author}, {book.year}</li>
                                    <Book key={index} title={book.title} author={book.author} year={book.year} deleteBook={() => deleteBook(index)} />
                                ))}
                            </ul>

                    }
                </themeContext.Provider>
                {books.length > 0 &&
                    <div className='pagination'>
                        <p>Page {currentPage} of {totalPage}</p>
                        <div className='page'>
                            <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span style={{ margin: '0 10px' }}></span>
                            <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>
                                Next
                            </button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Booklist