import React, { memo } from 'react';
import "./Bookform.css"
//pure component
function Book({title,author,year,deleteBook}) {
  const containerStyle = {
    border: "2px solid gray",
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Align items horizontally with space between them
    padding: "10px",
  };

  const contentStyle = {
    padding: "0px 10px",
  };
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h3>{title}</h3>
        <h6>Author: {author}</h6>
        <h6>Year: {year}</h6>
        <button onClick={deleteBook}>Delete</button>
      </div>
      
    </div>
  )
}

export default memo(Book) 
