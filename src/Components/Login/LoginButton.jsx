import React from 'react';
import { useNavigate} from 'react-router-dom';

function LoginButton(){
    
    const navigate = useNavigate();

    return (
    <button 
    className="login-button"
    onClick={()=>navigate('/')}
    >Login</button>
    )
};

export default LoginButton;