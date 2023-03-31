import React from 'react';

const SideBar = ({readTime}) => {
    return (
        <div className='md:sticky top-0'>
            <div>
                <h3>Spent time on read: {readTime} min</h3>
            </div>
        </div>
    );
};

export default SideBar;