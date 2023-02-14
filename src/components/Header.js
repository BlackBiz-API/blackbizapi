import Link from 'next/link'
import menu from '../../config/menu.json';
import Logo from './Logo';
import MobileMenu from './Navigation/MobileMenu';
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const {main} = menu;

    const showMobMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
        <header className='header'>
        <div className="container">
        <div className='header-wrap'>
            <div className='header-left'>
                <div className='brand'>
                   <Logo/>
                </div>
            </div>
            <div className='header-right'>
                <div className='desktop'>
                    <div className='menu'>
                        <ul className='menu-items'>
                            {main.map((item, key) => (
                                <li key={key}><Link href={item.url} target={`${item.internal ? '_self' : '_blank'}`}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/account" className="bg_btn">Get API Key</Link>

                </div>

                <div className='mob-menu'>
                    <div className='menu-trigger'>
                       <button className="toggle-btn" onClick={showMobMenu}>
                           <span className='line'></span>
                       </button>
                    </div>
                </div>
            </div>
        </div>
        <MobileMenu
            showMobMenu = {menuOpen ? 'active-menu' : ''}
            handleMenuClick = {showMobMenu}
        />
        </div>
    </header>
    </>
    );
}

export default Header;