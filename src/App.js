import React, { Component } from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <HomePage />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
