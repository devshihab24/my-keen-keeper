import React from 'react';
import Header from '../SharedComponents/Header';
import { Outlet } from 'react-router';
import Footer from '../SharedComponents/Footer';

const RootLayout = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;