import React from 'react';
import Link from 'next/link';
import config from '../../config/config.json';
const {site} = config;

function Logo(props) {
    return (
        <div className='brand'>
            <Link href='/' className='logo'>
                <img src={site.logo} alt={site.logo_text}/>
            </Link>
        </div>
    );
}

export default Logo;