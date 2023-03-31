import React, { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';
import Blogs from '../Blogs/Blogs';
import SideBar from '../SideBar/SideBar';

const Main = () => {

    return (
        <div className='container mx-auto md:flex justify-between gap-5'>
            <div className='md:w-3/4'>
                <Blogs />
                <Articles />
            </div>
            <div className='md:w-1/4'>
                <SideBar />
            </div>
        </div>
    );
};

export default Main;