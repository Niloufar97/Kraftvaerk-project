import React from 'react';
import NavBarListItem from './NavBarListItem';
import { NavLink } from 'react-router-dom';

const navBarItems = [
    {
        icon: "home",
        title: "Home",
        description: "Overview",
        link: "/"
    },
    {
        icon: "message",
        title: "SST",
        description: "Standard smoke tests",
        link: "/SST"
    },
    {
        icon: "screen_share",
        title: "SIT",
        description: "Site integration tests",
        link: "/SIT"
    },
    {
        icon: "compare_arrows",
        title: "IRT",
        description: "Image regression tests",
        link: "/IRT"
    },
    {
        icon: "alarm",
        title: "CRON",
        description: "Site monitoring CRON tests",
        link: "/CRON"
    },
    {
        icon: "timeline",
        title: "Error tracking",
        description: "Real time error tracking",
        link: "/Error-tracking"
    },
    {
        icon: "dns",
        title: "Server Measurements",
        description: "Real time SM tracking",
        link: "/server-measurements"
    }
];

function NavBar(){
    return (
        <div className="nav-bar">
          <ul className="nav-bar-list">
            {navBarItems.map((navBarItem) => (
              <li key={navBarItem.title}>
                <NavLink className='rote-link' to={navBarItem.link}>
                  <NavBarListItem navBarProps={navBarItem} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default NavBar;