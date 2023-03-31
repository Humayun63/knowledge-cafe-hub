import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({blogs}) => {
    return (
        <div>
           {blogs.map(blog =>  <SingleBlog blog={blog}/>)}
        </div>
    );
};

export default Blogs;