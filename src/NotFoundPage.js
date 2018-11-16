import React, { Component } from 'react'
import Content from './Content'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Content className='NotFoundPage'>
        <h2>Page Not Found</h2>
        <p>This page doesn't exist, try going back or using the navigation menu</p>
      </Content>
    )
  }
}
