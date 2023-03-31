import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({blogs, clickHandeler}) => {
    return (
        <div>
           {blogs.map(blog =>  <SingleBlog blog={blog} clickHandeler={clickHandeler}/>)}
        </div>
    );
};

export default Blogs;