import React from 'react'

function Book({title,author,year}) {
    const style={"border":"2px solid red","padding":"2px","margin":"5px"}
  return (
    <div style={style}>
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
    </div>

  )
}

export default Book