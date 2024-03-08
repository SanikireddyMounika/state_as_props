import React, { Component } from 'react'

export class Child extends Component {
  render() {
    const {childstate,updatestate}=this.props
    return (

      <div>
        <h1>state from parent!.{childstate}</h1>
        <button onClick={()=>updatestate('i am update ')}>Child</button>
      </div>
    )
  }
}

export default Child
