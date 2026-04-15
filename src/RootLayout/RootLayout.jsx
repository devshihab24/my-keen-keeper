import React from 'react';
import Header from '../SharedComponents/Header';
import { Outlet } from 'react-router';
import Footer from '../SharedComponents/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Header></Header>
            <div className='pt-20 lg:pt-15'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer autoClose={2500} theme='dark'></ToastContainer>
        </div>
    );
};

export default RootLayout;