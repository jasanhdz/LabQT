import React from 'react';
// import './styles/layout.css'


const Layout = props => {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
};

export default Layout;