import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import App from './App.jsx';

ReactDOM.render(
  <>
  <h1 className="heading_style"> My Top Web Serises </h1>
  {Card.map((val)=>{
     return(
      <App
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
      />
    );
     })}
  
  </>, document.getElementById('root')
);

