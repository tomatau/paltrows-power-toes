import React, { Component } from 'react'
import Content from './Content'

export default class HomePage extends Component {
  render() {
    return (
      <Content className='HomePage'>
        <h2>Welcome to my toe-tally amazing website!</h2>
        <p>I hope to provide the kick you need to get your toes in shape!</p>

        <h3>Tread lightly</h3>
        <p>We'll guide you one step at a time until you've completely&hellip; nailed it!</p>

        <h3>Low Prices</h3>
        <p>You'll save all the digits of your paycheck as we have put our foot down on prices!</p>
      </Content>
    )
  }
}
