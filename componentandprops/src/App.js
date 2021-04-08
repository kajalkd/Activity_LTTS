import React from 'react';
import logo from './logo.svg';
import './App.css';

class ParentComponent extends React.Component {    
  render() {    
      return (        
          <ChildComponent name="Welcome to React" />    
      );  
  }
}

const ChildComponent = (props) => {    
  return <p>{props.name}</p>; 
};
export default ParentComponent;
