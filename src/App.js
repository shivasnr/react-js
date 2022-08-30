import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Main from './Main';

function App() {
  return (
      <div>
          <Navbar/>
          <Main />
      </div>
  )
}


  ReactDOM.render(
    <App />,
    document.getElementById('root')
);