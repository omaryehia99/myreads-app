import React from 'react';
import {Link} from 'react-router-dom';
import { search } from '../BooksAPI';
import { Book } from '../components';

const Words = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]


class Search extends React.Component 
{
    state = 
    {
        books: []
    }

    handleSearch = event => {
        const query = event.target.value.trim();
        search(query).then(response =>
            {
                if(response && 'error' in response)
                {
                    alert('No availabe books with this name')
                }
                else{
                    this.setState( prevState=>({
                        books: response.map(book =>
                            {
                                if(!('shelf' in book))
                                {
                                    book.shelf = 'none'
                                }
                                if (this.props.books.some(b => b.id === book.id))
                                {
                                    const currentBook = this.props.books.filter(b => b.id === book.id)
                                    book.shelf =currentBook[0].shelf
                                }
                                return book
                            })
                    }) )

                }

            })

    }

    render() 
    {
        const {onShelfChange} = this.props;
        const {books} = this.state;
        return(          <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            onChange={this.handleSearch}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
                books &&
                books.length>0 && 
                books.map(book => 
                    <Book key={book.id} book={book} onShelfChange={onShelfChange} />
                )}
            
          </ol>
          {books && books.length === 0 && (
            <div>
          <p>We have a huge library of books for the following topics</p>
          <p>{Words && Words.join(', ')}</p>
          </div>
          )}

        </div>
      </div>)
    }
}

export default Search