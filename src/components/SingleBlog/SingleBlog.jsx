import React from 'react';

const SingleBlog = ({blogs}) => {
    const {id, authorImg, authorName, blogImg, blogIttile, publishDate, readTime, tags} = blogs;
    console.log(blogs);
    return (
        <div>
            <img src={blogImg} alt="Blog Image" />
            <div>
                <div>
                    <img src={authorImg} alt="Author Image" />
                    <div>
                        <h4>{authorName}</h4>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>{readTime} min read</p>
            </div>
        </div>
    );
};

export default SingleBlog;