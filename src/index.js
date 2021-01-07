import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date();
currDate =currDate.getHours();
let greeting = '';
let cssStyle ={};

if(currDate>=1 && currDate< 12){
   greeting = 'Good Morning';
   cssStyle.color='green';
} else if (currDate>=12 && currDate< 17){
  greeting = 'Good AfterNoon';
  cssStyle.color='aqua';
} else if(currDate>= 17 && currDate< 21){
  greeting='Good Evening';
  cssStyle.color='blue';
} else{
   greeting='Good Night';
}

ReactDOM.render(
  <>
  <div>
  <h1> Hello Shivam ,<span style={cssStyle}>  {greeting} </span></h1>
  </div>
  </>,
  document.getElementById('root')

);