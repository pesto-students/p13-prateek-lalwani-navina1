import React, { useMemo, useState } from 'react'

function useBookFilter(books,searchword) {
  const filteredBooks=useMemo(()=>{
    if(!searchword) return books;
    return books.filter((book)=>
        book.title.toLowerCase().includes(searchword.toLowerCase())    
    );
  },[books,searchword])
  // Recalculate only when books or searchTerm changes
  return filteredBooks;
}

export default useBookFilter;