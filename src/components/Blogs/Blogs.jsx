import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({blogs, clickHandelerTime, clickHandelerBookMarked}) => {
    return (
        <div>
           {blogs.map(blog =>  <SingleBlog 
                                    key={blog.id}
                                    blog={blog} 
                                    clickHandelerTime={clickHandelerTime}
                                    clickHandelerBookMarked={clickHandelerBookMarked} 
                                />
                    )}
        </div>
    );
};

export default Blogs;