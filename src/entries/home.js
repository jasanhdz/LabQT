import React from 'react';
import ReactDom from 'react-dom';
import Home from '../containers/Home.jsx';
import Entry from '../Firebase/Entry'; 

const app = document.getElementById("app");

ReactDom.render(<Home />, app);