import React from "react";
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
export const SideBarData =[
    {
        title:'Home',
        path:'/',
        Icon:<GrIcons.GrHomeRounded/>,
        className:'nav-text'
    },
    {
        title:'Explore',
        path:'/explore',
        Icon:<MdIcons.MdOutlineExplore/>,
        className:'nav-text'
    },
    {
        title:'History',
        path:'/Historique',
        Icon:<GrIcons.GrHistory/>,
        className:'nav-text'
    },   
    {
        title :'News',
        path:'/Actualite',
        Icon: <BsIcons.BsNewspaper />,
        className:'nav-text'
    }
]