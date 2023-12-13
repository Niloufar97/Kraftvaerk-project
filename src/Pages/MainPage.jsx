import React from 'react';
import Header from '../Components/Header/Header';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

function MainPage(){
    return(
        <>
        <Header />
        <NavBar />
        <Outlet />
        </>
    )
};

export default MainPage;