import React from 'react';
import ReactDOM from 'react-dom';
import App, {color,number} from './components/App';
import './index.css';

console.log(color,number);
//dom is the javascript object which represents the html  version of our application with a dom and the document variable.
ReactDOM.render(<App/>,document.getElementById('root'));