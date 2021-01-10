import React from 'react';

class AddColor extends React.Component{
  constructor(props){
    super(props);
    this.state = {color: ''};
  }
   handleChange = (event) => {
    this.setState({color: event.target.value});
  }
  
  handleSubmit = (event) => {
    alert('A new color was added' + this.state.color);
    event.preventDefault();
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" value={this.state.color} onChange={this.handleChange}/>
        </label>
        <input type="submit" value='Submit'/>
      </form>
    )
  }
};

export default AddColor;