import React, { useEffect, useState } from 'react';
import SingleArticle from '../SingleArticle/SingleArticle';

const Articles = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('articles.json')
        .then(res => res.json())
        .then(articles => setArticles(articles))
        .catch(err => console.log(err))
    }, [])
    console.log(articles);
    return (
        <div className='my-8'>
            <h2 className='font-bold text-2xl text-center my-8'>Question and Answer Blog</h2>
            {
                articles.map(article => <SingleArticle key={article.id} article={article}/>)
            }
        </div>
    );
};

export default Articles;