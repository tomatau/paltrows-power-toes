import React, { Component } from 'react'
import Content from './Content'

export default class Header extends Component {
  render() {
    return (
      <Content className='Header'>
        <h1>Paltrows<br />Power Toes</h1>
        <p><em>put your socks away!</em></p>
      </Content>
    )
  }
}
