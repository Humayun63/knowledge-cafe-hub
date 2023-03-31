import React, { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';
import Blogs from '../Blogs/Blogs';
import SideBar from '../SideBar/SideBar';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
        .catch(err => console.log(err));
    }, [])
    console.log(blogs);
    return (
        <div className='container mx-auto md:flex justify-between gap-5'>
            <div className='md:w-3/4'>
                <Blogs blogs={blogs}/>
                <Articles />
            </div>
            <div className='md:w-1/4'>
                <SideBar />
            </div>
        </div>
    );
};

export default Main;