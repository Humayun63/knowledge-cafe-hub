import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = ({ blog, clickHandelerTime, clickHandelerBookMarked }) => {
    const { authorImg, authorName, blogImg, blogTitle: blogTitle, publishDate, readTime, tags } = blog;
    return (
        <div className='border-b-2 mb-8 p-4'>
            <img src={blogImg} alt="Blog Image" className='h-96 w-full rounded' />
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 my-4'>
                    <div className='h-16 w-16 p-2 rounded-full'>
                        <img src={authorImg} alt="Author Image" className='w-full h-full rounded-full'/>
                    </div>
                    <div>
                        <h4 className='font-bold text-2xl mb-1'>{authorName}</h4>
                        <p className='font-semibold text-slate-400 text-xs'>{publishDate}</p>
                    </div>
                </div>
                <p className='text-slate-400 text-xl'>
                    {readTime} min read
                    <span className='ms-2 cursor-pointer' onClick={()=>clickHandelerBookMarked(blogTitle)}> <FontAwesomeIcon icon={faBookmark} /></span>
                </p>
            </div>
            <h2 className='font-bold text-4xl mb-4'>{blogTitle}</h2>
            <p>
                {
                    tags.map(tag => (
                        <span className='text-slate-400 text-lg' key={tag}>#{tag} </span>
                    ))
                }
            </p>
            <button className='mt-4 font-medium underline text-lg text-cyan-400' onClick={()=>clickHandelerTime(readTime)}>Mark as read</button>
        </div>
    );
};

export default SingleBlog;