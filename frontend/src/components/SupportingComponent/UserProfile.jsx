import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import useClickOutsite from "../../customHook/ClickOutsite.jsx";
import './UserProfile.scss';

const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  let domNode = useClickOutsite(() => {
    setIsProfileOpen(false);
  });

  return (
    <div
      ref={domNode}
      className='avatar_container'
      onClick={() => {
        setIsProfileOpen(!isProfileOpen)
      }}
    >
      <div className="icon_avatar_container">
        
      </div>

      <div className="name">
        <span>Username</span>
        <MdKeyboardArrowDown />
      </div>

      <div className={`menu ${isProfileOpen ? 'menu_active' : ''}`}>
        <div className="info">
          <span className="name">Username</span>
          <span className="role">Role</span>
        </div>
        <div className="settings">
          <Link to="/d">Settings</Link>
          <Link to="/d">Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;