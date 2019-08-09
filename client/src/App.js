import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import FoodList from './components/FoodList';
import Styled from "styled-components"; 

const Margin = Styled.div`
margin: 20px; 
`

class App extends React.Component {
  constructor() {
    super(); 
    this.state = null 
  } 

render() {
  return (
    <div className="App">
    <Margin> </Margin>
      <h1> This is a Happy Place </h1> 
      <Margin> </Margin>
      <UserForm /> 
      <h3> Food List </h3>
      <FoodList /> 
    </div>
  );
}
}

   

  

export default App;
