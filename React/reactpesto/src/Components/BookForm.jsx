import React from 'react'
import { useState } from 'react';
import "./Bookform.css"
function BookForm() {
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [year,setYear]=useState("");
    
  return (
    <div className="book-form-container">
        <form className="book-form">
            <input type='text' name='title' placeholder='Book name..'/>
            <input type='text' name='author'placeholder='Author'/>
            <input type='number' name='year' placeholder='Year'/>
            <button >Add Book</button>
        </form>
    </div>
  )
}

export default BookForm