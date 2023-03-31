import React from 'react';
import userImage from './../../assets/img/user.png'
const Header = () => {
    return (
        <div className='container mx-auto my-9 md:flex justify-between px-4 items-center border-b-2 pb-2 text-center'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={userImage} alt="user image" className='w-14 mt-4 mx-auto md:mx-0 md:mt-0' />
        </div>
    );
};

export default Header;