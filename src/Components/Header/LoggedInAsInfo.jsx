import React from 'react';

function LoggedInAsInfo({userInfo}){
   return(
    <span className="logged-in-as">Logged in as: {userInfo}</span>
   )
};

export default LoggedInAsInfo;