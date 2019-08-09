import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import FoodList from './components/FoodList';

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
      {FoodList.map(rest => (
        <FoodList key={rest.id} rest={rest} /> 
      ))}
      
    </div>
  );
}
}

   

  

export default App;
