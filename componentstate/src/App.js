import React from 'react';

class Test extends React.Component {    
  constructor() { 
    super();   
      this.state = {      
          id: 1441,      
          name: "Kajal" 
             
      };  
  }  
  handleClick = event => {
    this.setState({ id : "2020" });
  };  
  
  render() {    
      return (      
          <div>        
            <p>ID:{this.state.id}</p>        
            <p>Name:{this.state.name}</p>    
            <button onClick={this.handleClick}>Refersh</button> 
          </div>    
      );  
  }
}

export default Test;
