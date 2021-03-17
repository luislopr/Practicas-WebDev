import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from './snake';


ReactDOM.render(
  <React.StrictMode>
    <SnakeGame tam={12}/>
  </React.StrictMode>,
  document.getElementById('root')
);
