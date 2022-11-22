import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div >
            <nav className='flex justify-center items-center rounded-md text-gray-900 font-bold space-x-4 text-xl'  >
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink className='flex' to='/review'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>DashBoard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;