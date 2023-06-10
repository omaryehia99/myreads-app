import React from 'react'
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Books, Search, PageNotFound} from './pages'
import { getAll, update } from './BooksAPI';

class BooksApp extends React.Component {
  state = 
  {
    books: []
  }

  async componentDidMount () 
  {
    const books = await getAll() 
    this.setState( { books })
  }

  onShelfChange = (book, shelf) => {
    update(book, shelf)
    .then(() =>{
      const { books } = this.state
      book.shelf = shelf
      this.setState
      ({ 
         books: [...books.filter(b => b.id !== book.id ), book]
      })
    })
    .catch(console.error)
  }

  render() 
  {
    const { books } = this.state
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/" exact render = {() => <Books books={books} onShelfChange={this.onShelfChange} />} />
        <Route path="/search" exact render = {() => <Search books={books} onShelfChange={this.onShelfChange} />} />
        <Route path="/404" exact component = {PageNotFound} />
        <Redirect to = "/404" />
      </Switch>
      </BrowserRouter>
      )
    
  }
}


export default BooksApp
