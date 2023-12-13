import React from 'react';

function NavBarListItem({navBarProps}){
    return (
        
                <div className="nav-bar-list-item">
                    <div className="nav-bar-list-link">
                        <i className="material-icons">{navBarProps.icon}</i>
                        <div className="nav-bar-text">
                        <span className="nav-bar-title">{navBarProps.title}</span>
                        <span className="nav-bar-description">{navBarProps.description}</span>
                    </div>
                    </div>
                </div>
        
    )
};

export default NavBarListItem;