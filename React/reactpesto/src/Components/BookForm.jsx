import React, { useContext } from 'react'
import { useState } from 'react';
import "./Bookform.css";
import { themeContext } from './Booklist';
function BookForm({addBook}) {
    const theme=useContext(themeContext);
    //console.log(theme.theme);
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [year,setYear]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title && author && year){
            const newBook={ title: title, author: author, year: year }
            addBook(newBook);
            setTitle("");
            setAuthor("");
            setYear("");
        }else{
            alert('Please fill in all fields');
            return;
        }
        
    }
  return (
    <div className="book-form-container">
        <form className={`book-form-${theme.theme}`}>
            <input type='text' id='title' value={title} placeholder='Book name..' onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type='text' id='author' value={author} placeholder='Author'onChange={(e)=>{setAuthor(e.target.value)}}/>
            <input type='number' id='year' value={year} placeholder='Year' onChange={(e)=>setYear(e.target.value)}/>
            <button className={`button-${theme}`} id='button' onClick={handleSubmit}>Add Book</button>
        </form>
    </div>
  )
}

export default BookForm