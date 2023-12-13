import React from 'react';

function GetToken(){
    let token = "token " + localStorage.getItem('token')
   // let token = "token asJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI5YTBlNjlmOC01ZGJlLTQ4OWItOTM3MS0yMTk1NGU1MjdhYzgifQ.lIZCu7r6KSpWvxhkU-kakdawkndkanas"
    return token;
}

export default GetToken;