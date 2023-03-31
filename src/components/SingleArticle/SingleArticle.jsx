import React from 'react';

const SingleArticle = ({article}) => {
    console.log(article);
    return (
        <article className='bg-slate-100 p-4 rounded-md'>
            <h3 className='font-semibold text-xl my-3'>Differences between props and state</h3>
            <p className='text-justify'>
                Both are plain JS object and can contain default values. But in case of differences, the State is mutable but Props is immutable. This Means State can be changed by the setState inbuild function but Props can not be changed. Props are read-only and State changes can be asynchronous. Props are used to communicate between components but State can be used for rendering dynamic changes with the component. Props is passed from one component to another but State is a local data storage that is local to the component only and cannot be passed to other components.
            </p>
        </article>
    );
};

export default SingleArticle;