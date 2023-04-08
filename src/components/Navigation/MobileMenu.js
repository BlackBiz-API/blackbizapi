import React from "react";
import menu from '../../../config/menu.json';
import Link from 'next/link';
const {main} = menu;

function MobileMenu(props) {
    return (
        <div className={`mobile-menu ${props.showMobMenu}`}>
           <div className='nav-menu'>
                <ul>
                {main.map((item, key) => (
                    <li key={key}><Link href={item.url} target={`${item.internal ? '_self' : '_blank'}`} onClick={props.handleMenuClick}>{item.name}</Link></li>
                ))}
                </ul>
                <Link href="/account" className="bg_btn mt-4 w-100" onClick={props.handleMenuClick}>Get API Key</Link>
           </div>
        </div>
    );
}

export default MobileMenu;