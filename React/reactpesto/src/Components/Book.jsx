import React, { memo } from 'react';
import "./Bookform.css"
//pure component
function Book({title,author,year,deleteBook}) {
    const style={"border":"2px solid gray","margin":"5px","display":"flex"}
    const style2={"padding":"0px 10px"};
  return (
    <div style={style}>
        <h3 style={style2}>{title}</h3>
        <h6 style={style2}>Author: {author}</h6>
        <h6 style={style2}>Year: {year}</h6>
        <button  onClick={deleteBook}>Delete</button>
    </div>

  )
}

export default memo(Book) 
