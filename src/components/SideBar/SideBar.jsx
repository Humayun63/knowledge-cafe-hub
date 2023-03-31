import React from 'react';
import BookmarkName from '../BookmarkName/BookmarkName';

const SideBar = ({readTime, bookmarked}) => {
    return (
        <div className='md:sticky top-0'>
            <div className='border-2 p-4 text-center border-sky-600 rounded-lg bg-sky-100 mt-4'>
                <h3 className='text-sky-600 font-bold text-xl'>Spent time on read: {readTime} min</h3>
            </div>
            <div className='rounded-lg bg-slate-100 mt-4 p-4'>
                <h3 className='font-bold text-xl text-center'>Bookmarked Blogs: {bookmarked.length}</h3>
                {
                    bookmarked.map(name => <BookmarkName name={name} key={name} />)
                }
            </div>
        </div>
    );
};

export default SideBar;