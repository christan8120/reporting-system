import React, { useState } from "react"
import './Notification.scss';
import { FiMessageCircle } from 'react-icons/fi';
import useClickOutsite from "../../customHook/ClickOutsite.jsx";

const Notification = ({title, content, date}) => {
  return (
    <div className="notification">
      <h3 className="notification_title">&#128227; {title}</h3>
      <p>{content}</p>
      <h4 className="notification_date">{date}</h4>
    </div>
  )
}

Notification.defaultProps = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nesciunt voluptatum minima aut numquam saepe",
  title: "Lorem ipsum dolor sit.",
  date: "11/12/21",
};

const Notifications = () => {
  const [ isNotificationsOpen, setIsNotificationsOpen ] = useState(false);
  let domNode = useClickOutsite(() => {
    setIsNotificationsOpen(false);
  });

  return (
    <div 
      ref={domNode}
      className={`icon_container notifications_container ${isNotificationsOpen ? 'icon_active' : undefined}`}
      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
      >
        <FiMessageCircle />

        <div className={`submenu ${isNotificationsOpen ? 'submenu_active' : ''}`}>
          <h3 className="title">Notifications</h3>
          <div className="notifications">
            <Notification />
          </div>
        </div>
    </div>
  )
}

export default Notifications