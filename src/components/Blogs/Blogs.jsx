import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({blogs, clickHandelerTime}) => {
    return (
        <div>
           {blogs.map(blog =>  <SingleBlog 
                                    key={blog.id}
                                    blog={blog} 
                                    clickHandelerTime={clickHandelerTime}
                                />
                    )}
        </div>
    );
};

export default Blogs;