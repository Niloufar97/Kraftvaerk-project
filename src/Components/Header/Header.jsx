import React from 'react';
import Logo from './Logo';
import LoggedInAsInfo from './LoggedInAsInfo';
import LogoutButton from './LogoutButton';

function Header(){
    const loggedInAs = localStorage.getItem('loggedAs');
    return (
        <div className="header">
            <Logo />
            <div className="logged-div">
               <LoggedInAsInfo userInfo={loggedInAs} />
               <LogoutButton />
            </div>
        </div>
        
    )
};

export default Header;