import React from 'react';
import './style.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const Content = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='content'>        
            {props.children}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Content;