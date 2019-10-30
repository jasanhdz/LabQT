import React from 'react';
import './options/menu_before.css';

const Menu_Before = props => {
  return (
    <section  ref={props.refMenuBefore} className="Menu__Before">
     {props.children}
    </section>
  );
}
export default Menu_Before;