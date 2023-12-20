// useBookSorter.js

import { useMemo } from 'react';

const useBookSorter = (books, sortingCriteria) => {
  const sortedBooks = useMemo(() => {
    if (!books || books.length === 0) {
      return books;
    }

    // Create a copy of the books array to avoid mutating the original array
    const sortedBooksCopy = [...books];

    // Sorting logic based on the sortingCriteria
    switch (sortingCriteria) {
      case 'title-asc':
        sortedBooksCopy.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sortedBooksCopy.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author-asc':
        sortedBooksCopy.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'author-desc':
        sortedBooksCopy.sort((a, b) => b.author.localeCompare(a.author));
        break;
      case 'year-asc':
        sortedBooksCopy.sort((a, b) => a.year - b.year);
        break;
      case 'year-desc':
        sortedBooksCopy.sort((a, b) => b.year - a.year);
        break;
      default:
        // If sortingCriteria is not recognized, return the original unsorted list
        return books;
    }

    return sortedBooksCopy;
  }, [books, sortingCriteria]);

  return sortedBooks;
};

export default useBookSorter;
