import React, { Component } from 'react'
import Content from './Content'
import portrate from './g-paltrow-self-portrate.png'
import './AboutPage.css'

export default class AboutPage extends Component {
  render() {
    return (
      <Content className='AboutPage'>
        <img src={portrate} alt='Self portrate' />
        <h2>About</h2>
        <p>
          Hi, this is a self portrate I made. Can you see how sturdy I am? You can be this sturdy too!
        </p>
        <p>
          Recently I was playing with some goop, and I suddenly realised, people use their toes every day!
        </p>
        <p>
          That's why I'm making this website.
        </p>
      </Content>
    )
  }
}
