import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';
import * as VSCIcons from 'react-icons/vsc';
import Sidebar from '../Sidebar/Sidebar'
import './_header.scss'

const Header = () => {
  return <div className='header'>
    <>
            <nav className='NAV'>
                <div className='Left-side-of-navbar'>
                    <Sidebar/>
                </div>
                <div className='middle-of-navbar'>
                    <input type="text" placeholder='Rechercher' className='navbar__search__input'/>
                    <button className='navbar__search__btn'><AiIcons.AiOutlineSearch className='search__icon__nav__btn'/></button>
                    <div className='middle__nav__mic__container'>
                        <IoIcons.IoMdMic className='middle__nav__mic'/>
                    </div>
                </div>
                <div className='right-of-navbar'>
                    <Io5Icons.IoAppsOutline className='right__nav__apps'/>
                    <AiIcons.AiOutlineMore className='right__nav__more'/>
                    <VSCIcons.VscAccount className='right__nav__connect__btn__icon'/>
                </div>
            </nav>
            
        </>
  </div>;
};

export default Header;
