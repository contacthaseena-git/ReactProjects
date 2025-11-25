import React, { Component } from 'react'
import axios from 'axios'

export class Jokesgenerator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         jokes:[]
      }
    }
    generatejokes=()=>{
        axios.get('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
        .then(response=>{console.log(response.data)
            this.setState({jokes: response.data})
        })
        .catch(err=> console.log(err.data))
    }
    
  render() {
    const {jokes}= this.state
    return (
      <div>
        <button  onClick={this.generatejokes}>Generate Jokes</button>
        <label>
      {jokes.joke} 
        </label>
       
      </div>
    )
  }
}

export default Jokesgenerator
