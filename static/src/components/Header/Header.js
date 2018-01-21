import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuItem = ({exact, children, to}) => {
    return (
        <NavLink 
            exact={exact}
            to={to} 
            className={cx("menu-item")} 
            activeStyle={{
                background: '#b92f2f',
                fontWeight: 'bold',
                color: '#fff'
            }}
        >{children}</NavLink>
    );
};

const Header = () => {
    return (
        <div>
            <div className={cx("logo")}>
                MENU
            </div>
            <div className={cx("menu")}>
                <MenuItem exact={true} to={'/'}>HOME</MenuItem>
                <MenuItem to={'/about'}>ABOUT</MenuItem>
                <MenuItem to={'/posts'}>POST</MenuItem>
                <MenuItem to={'/me'}>MYPATE</MenuItem>
                <MenuItem to={'/login'}>LOGIN</MenuItem>
            </div>
        </div>
    );
};

export default Header;
