import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = ({ blog }) => {
    const { authorImg, authorName, blogImg, blogTitle: blogTitle, publishDate, readTime, tags } = blog;
    console.log(blogImg);
    return (
        <div className='border-b-2 mb-8 p-4'>
            <img src={blogImg} alt="Blog Image" />
            <div>
                <div>
                    <img src={authorImg} alt="Author Image" />
                    <div>
                        <h4>{authorName}</h4>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>
                    {readTime} min read
                    <span> <FontAwesomeIcon icon={faBookmark} /></span>
                </p>
            </div>
            <h2>{blogTitle}</h2>
            <p>
                {
                    tags.map(tag => (
                        <span>#{tag} </span>
                    ))
                }
            </p>
            <button>Mark as read</button>
        </div>
    );
};

export default SingleBlog;