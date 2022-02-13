import React, { useCallback, useState } from 'react';
import './style.css';
import './Content.scss';

import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import TopNavbar from './SupportingComponent/TopNavbar.jsx';
import NavbarContext from '../context/NavbarContext.jsx';

const Content = (props) => {
  const initNav = localStorage.getItem('showNav') == "true" ? true : false;
  const [nav, setNav] = useState(initNav);
  const setLocalNav = useCallback(() => {
    setNav(!nav);
    localStorage.setItem('showNav', !nav);
  },[nav]);

  const value = { nav, setNav, setLocalNav };
  return (
    <BrowserRouter>
      <div className='App'>
        <NavbarContext.Provider value={value}>
          <Header />
          <div className='content'> 
              <TopNavbar subMenuList={props.subMenuList} breadcrumb={props.breadcrumb}/>
              <main>
                {props.children}
              </main>
          </div>        
        </NavbarContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default Content;