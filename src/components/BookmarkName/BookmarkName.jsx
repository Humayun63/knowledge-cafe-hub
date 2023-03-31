import React from 'react';

const BookmarkName = ({name}) => {
    return (
        <div className='bg-white my-4 rounded-md'>
            <h3 className='text-xl font-semibold p-4'>{name}</h3>
        </div>
    );
};

export default BookmarkName;