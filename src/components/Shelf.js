import React from "react";
import Book from "./Book";
const Shelf = ({title, books, onShelfChange}) =>
{
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
            <Book book={book} key={book.id} onShelfChange={onShelfChange}/> ))}
          </ol>
        </div>
      </div>
    )
}

export default Shelf