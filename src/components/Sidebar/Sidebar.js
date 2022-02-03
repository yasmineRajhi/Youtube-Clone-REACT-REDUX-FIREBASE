import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';
import './_sidebar.scss'
import { useDispatch } from 'react-redux';
import { log_out } from '../../Redux/Actions/Auth.action';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(log_out())
  }
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
                <li key={index} className={item.className}>

                  <Link to={item.path} >
                    <span>{item.Icon}</span>
                    {item.title}</Link>
                </li>
              );
            })}
            <li className='nav-text' onClick={handleLogOut}>
              <Link to='#'>
                Log out
              </Link>
            </li>
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
