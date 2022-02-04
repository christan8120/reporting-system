import React from 'react';

const Body = (props) => {
  return (
    <body>
      <div className='body'>
        { props.children }
      </div>
    </body>
  )
}

export default Body;