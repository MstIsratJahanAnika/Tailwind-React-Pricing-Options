// import React from 'react';

const Link = ({route}) => {
    return (
        
        <li className='px-4 font-bold hover:bg-gray-200'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;