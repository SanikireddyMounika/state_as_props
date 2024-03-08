import React from 'react'
import Child from './Child'

export class App extends React.Component {

  state={parentState:" i am parent component"}
    updateParentcomponent=(newstate)=>{
      this.setState({parentState:newstate})
    }

  render() {
    const {parentState}=this.state
      
    return (
          <>
          <h1>parent state!.{parentState}</h1>
          <Child childstate={parentState} updatestate={this.updateParentcomponent}></Child>

          </>
    
    )
  }
}


export default App
