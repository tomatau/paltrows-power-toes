import React, { Component } from 'react'
import Content from './Content'
import './WorkoutsPage.css'

export default class WorkoutsPage extends Component {
  render() {
    return (
      <Content className='WorkoutsPage'>
        <h2>Here are my favourite workouts</h2>
        <ol>
          <li>Try to walk with purpose</li>
          <li>Repeatedly tell your toes they're fabulous!</li>
          <li>Look at your toes sometimes and just concentrate on them&hellip;</li>
          <li>Use heavier weights with your toes when you feel ready</li>
          <li>Eat more parsnips</li>
        </ol>
      </Content>
    )
  }
}
