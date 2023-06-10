import React from "react";

const Book = ({book, onShelfChange}) =>
    {
        const {title, authors, imageLinks, shelf} = book
        const thumbnail= imageLinks && imageLinks.thumbnail? imageLinks.thumbnail: ''
        return (        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ 
            width: 128, 
            height: 193, 
            backgroundImage: `url(${thumbnail})`
             }}></div>
          <div className="book-shelf-changer">
            <select 
            value= {shelf} 
            onChange={event =>{
                const newShelf = event.target.value 
                onShelfChange(book, newShelf)
            }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(', ')}</div>
      </div>)            
    }


export default Book