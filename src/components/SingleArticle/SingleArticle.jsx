import React from 'react';

const SingleArticle = ({ article }) => {
    const { title, description } = article;
    return (
        <article className='bg-slate-100 p-4 rounded-md mb-4'>
            <h3 className='font-semibold text-xl my-3'>{title}</h3>
            <p className='text-justify mb-4'>
                {description}
            </p>
            {
                // console.log(article?.uses)
                article?.uses && article.uses.map(item => <li className='px-3 mb-1'>{item}</li>)
            }
        </article>
    );
};

export default SingleArticle;