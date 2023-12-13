import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton(){
    const navigate = useNavigate();

    function logoutButtonHandling(){
        localStorage.removeItem('token');
        navigate('/auth')
    }
    return (
        <button 
        className="button logout-button"
        onClick={()=>logoutButtonHandling()}
        >Logout</button>
    )
};

export default LogoutButton;