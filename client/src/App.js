import React from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = null 
  } 

render() {
  return (
    <div className="App">
      <div> This is a Happy Place </div> 
      <UserForm /> 
    </div>
  );
}
}

   

  

export default App;
