import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
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
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
