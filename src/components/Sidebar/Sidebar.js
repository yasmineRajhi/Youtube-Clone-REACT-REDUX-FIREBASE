import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';

import './_sidebar.scss'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars className='sidebar__button__activator' onClick={showSidebar} />
          <Link to='/' className='menu-bars'>
            <FaIcons.FaYoutube className='youtube__icon__left__nav' />
            <span className='youtube__name__left__nav'>YouTube</span>
          </Link>
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle' onClick={showSidebar}>
              <a href='#' className='menu-bars'>
                <FaIcons.FaBars className='sidebar__button__activator' />
                <a href='/' className='menu-bars'>
                  <FaIcons.FaYoutube className='youtube__icon__left__nav' />
                  <span className='youtube__name__left__nav'>YouTube</span>
                </a>
              </a>
              <div className='nav__overlay'></div>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li className={item.className}>

                  <a href='#'>
                    <span>{item.Icon}</span>
                    {item.title}</a>
                </li>
              );
            })}
            <div className='sidebar__nav__footer'>
              PrésentationPresseDroits d'auteurNous contacterCréateursPublicitéDéveloppeurs
              Conditions d'utilisationConfidentialitéRègles et sécuritéPremiers pas sur YouTubeTester de nouvelles fonctionnalités
              © 2021 Google LLC
            </div>
          </ul>
        </nav>
      </div>
    </>);
};

export default Sidebar;
