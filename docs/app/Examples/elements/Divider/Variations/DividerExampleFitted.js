import React, { Component } from 'react'
import { Segment, Divider } from 'semantic-ui-react'

export default class DividerExampleFitted extends Component {
  render() {
    return (
      <Segment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        <Divider fitted />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    )
  }
}
