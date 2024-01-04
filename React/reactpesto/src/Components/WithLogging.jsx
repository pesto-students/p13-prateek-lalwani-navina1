import React from 'react'
//higher order component
function WithLogging({book,children}) {
    console.log("book-" ,book)
  return (
    <div>
        {children}
    </div>
  )
}

export default WithLogging