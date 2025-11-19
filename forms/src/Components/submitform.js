import React, { Component } from 'react'

export class submitform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:"",
         lastname:"",
         email:"",
         contact:"",
         gender:"",
         subject:[],
         choice:""
      }
    }
  
    Handlechange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
    }
    handleReset = () => {
        // Reset all state variables here
      
    };
    handleSubmit = (e) => {
        e.preventDefault();
       
      
        // Add your form submission logic here
    };
  render() {
    return (
        <div className="App"> 
         <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
      <div>
        <label>First Name</label>
        <input type="text" name="firstname" value={this.state.firstname} onChange={this.Handlechange}  placeholder="Enter First Name"
                        required>
        </input>
      </div>
       <div>
        <label>Last Name</label>
        <input type="text" name="lastname" value={this.state.lastname} onChange={this.Handlechange}  placeholder="Enter Last Name"
                        required>
        </input>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={this.state.email} onChange={this.Handlechange}  placeholder="Enter Email"
                        required></input>
      </div>
      <div>
        <label>Contact</label>
        <input type="number" name="contact" value={this.state.contact} onChange={this.Handlechange}  placeholder="Enter Contact"
                        required></input>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" checked={this.state.gender=== "male"} onChange={this.Handlechange}/>Male
        <input type="radio" name="gender" value="female" checked={this.state.gender=== "female"} onChange={this.Handlechange}/>female
    
      </div>
      <div>
        <label>Subject</label>
        <input type="checkbox" name="subject" value="Maths" checked={this.state.subject==="Maths"} onChange={this.Handlechange}/>Maths
      <input type="checkbox" name="subject" value="English" checked={this.state.subject==="English"} onChange={this.Handlechange}/>English
    
      </div>
      <div>
        <label>Upload Resume</label>
        <input type="file"></input>
      </div>
      <div>
        <label>Select your choice</label>
        <select value={this.state.choice} onChange={this.Handlechange}>
          <option value="">Select a Value</option>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
        </select>
      </div>
       <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={this.Handlechange}
                        
                        placeholder="About your self"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
      </form>
      </fieldset>
      </div>
    )
  }
}

export default submitform
