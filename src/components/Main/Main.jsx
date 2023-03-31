import React, { useEffect, useState } from 'react';
import Articles from '../Articles/Articles';
import Blogs from '../Blogs/Blogs';
import SideBar from '../SideBar/SideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [bookmarked, setBookmarked] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
        .catch(err => console.log(err));
    }, [])
    const clickHandelerTime = (time) =>{
        const newTime = parseFloat(time);
        const totalTime = readTime + newTime;
        setReadTime(totalTime);
    }
    const clickHandelerBookMarked = (name) =>{
        bookmarked.includes(name) ? toast("You Have Already Bookmarked This Blog!") : setBookmarked([...bookmarked, name]);
    }
    return (
        <div className='container mx-auto md:flex justify-between gap-5'>
            <ToastContainer />
            <div className='md:w-3/4'>
                <Blogs 
                    blogs={blogs} 
                    clickHandelerTime={clickHandelerTime} 
                    clickHandelerBookMarked={clickHandelerBookMarked} 
                />
                <Articles />
            </div>
            <div className='md:w-1/4'>
                <SideBar readTime={readTime} bookmarked={bookmarked} />
            </div>
        </div>
    );
};

export default Main;