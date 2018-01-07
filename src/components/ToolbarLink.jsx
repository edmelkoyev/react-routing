import React from 'react';
import { NavLink } from 'react-router-dom';

// props -> children, ...rest 
function ToolbarLink({ children, ...rest }) {
    return (
        <NavLink activeClassName="mdc-tab--active" {...rest}>{children}</NavLink>            
    );
}

export default ToolbarLink;