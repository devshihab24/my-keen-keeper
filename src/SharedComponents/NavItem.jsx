import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({item}) => {
    const {path, text, logo} = item
    return (
        <div>
            <NavLink className={({isActive})=>`btn ${isActive && 'bg-green-900 text-white'} sm:text-base `} to={path}>{logo} {text}</NavLink>
        </div>
    );
};

export default NavItem;