import React, { Component } from 'react'
import Book from './Book'
import WithLogging from './WithLogging';

export class BooklistClassComponent extends Component {
    constructor(){
        super();
        this.state={
            
            books:[
                { title: 'Book 1', author: 'Author 1', year: 2020 },
                { title: 'Book 2', author: 'Author 2', year: 2018 },
                { title: 'Book 3', author: 'Author 3', year: 2022 },
            ]
        }
    }
   
  render() {
    return (
        <div style={{"justifycontent": "center"}}>
            <h1>BooklistClassComponent</h1>
            <ul>
                {this.state.books.map(book => (
                    <WithLogging book={book.title}>
                        <Book title={book.title} author={book.author} year={book.year}/>
                    </WithLogging>
                    
                ))}
            </ul>
        </div>
    )
  }
}

export default BooklistClassComponent