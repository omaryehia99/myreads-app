import React from 'react';
import { Shelf } from '../components';
import {Link} from 'react-router-dom';


const Books = ({ books, onShelfChange }) =>

    
     (          <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        {books.length === 0 && <h1>Loading...</h1>}
        {books.length>0 && (
      <div>
        <Shelf  title={'Currently Reading'}
        books={books.filter(book => book.shelf ==='currentlyReading')}
        onShelfChange = {onShelfChange}
        />
        <Shelf  title={'Want To Read'}
        books={books.filter(book => book.shelf === 'wantToRead')}
        onShelfChange = {onShelfChange}
        />
        <Shelf  title={'Read'}
        books={books.filter(book => book.shelf === 'read')}
        onShelfChange = {onShelfChange}
        />
      </div>
      )}
    </div>
    <div className="open-search">
      <Link to="/search"><button>Add a book</button></Link>
    </div>
  </div>)
    


export default Books