import React, { useContext, useState } from 'react';

import { MdOutlineMenu } from "react-icons/md";
import UserProfile from './UserProfile.jsx';
import './TopNavbar.scss';
import NavbarContext from '../../context/NavbarContext.jsx';
import Notifications from './Notification.jsx';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const TopNavbar = ({subMenuList, breadcrumb}) => {
  const { nav, setNav } = useContext(NavbarContext);
  const [subNav, setSubNav] = useState(false);

  const moveRight = (e) => {
    document.querySelector('#sub_menu_container').scrollLeft += 200;    
  };

  const moveLeft = (e) => {
    document.querySelector('#sub_menu_container').scrollLeft -= 200;    
  };

  return(
    <React.Fragment>
      <div className='container'>
        <div className="burger_container"
        onClick={() => setNav(!nav)}
        >
          <MdOutlineMenu />
        </div>

        <div className="top_container">
          <div className="system_name">
            <span className='company'>Company Name</span>
            <span className='separator'>|</span>
            <span className='system'>Reporting System</span>
          </div>
          <div className='actions'>
            <Notifications />
          </div>
        </div>
        <UserProfile />
      </div>
      {subMenuList && 
        <div className={`top_menu_container ${subNav ? `top_menu_container_hidden ${breadcrumb ? '' : 'flex-end'}` : undefined}`}>
          <div className="sub_menu_section">
            <div 
              className='arrow'
              onClick={moveLeft}
            >
              <BsChevronLeft />
            </div>
            <div className='sub_menu_container' id='sub_menu_container'>     
              {                
                subMenuList.map((v) => {
                  return <div className='sub_menu' key={v.id}>
                    <NavLink to={v.link}>{v.description}</NavLink>
                  </div>
                })              
              }
            </div>
            <div 
              className='arrow'
              onClick={moveRight}
              >
              <BsChevronRight />
            </div>
          </div>
          {breadcrumb && 
            <div className='breadcrumb_section'>
                {
                  breadcrumb.map((v, i) => {
                    return <React.Fragment key={i}>
                      <span>{v.description}</span>
                      { i != breadcrumb.length-1 && <span className='separator'>&gt;&gt;</span>}
                    </React.Fragment>
                  })
                }
            </div>
          }
          <div className='arrow_minimize' onClick={() => setSubNav(!subNav)}>
            <FaAngleDoubleUp /> 
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default TopNavbar;