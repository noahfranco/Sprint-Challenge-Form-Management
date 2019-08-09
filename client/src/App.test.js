import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

describe("<App />", () => {
  
  // Unit Test 
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// Element Test 
  it("renders page title", () => {
    const app = render(<App />)

    app.getByText(/This is a Happy Place/i)
  })

// // event test 
// it("the submit button works", () => { 
// const button = redner(<UserForm />); 

// button.getbyEvent()
// })
})

