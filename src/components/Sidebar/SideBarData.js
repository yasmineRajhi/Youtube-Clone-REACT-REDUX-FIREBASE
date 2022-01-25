import React from "react";
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
export const SideBarData =[
    {
        title:'Home',
        path:'/',
        Icon:<GrIcons.GrHomeRounded/>,
        className:'nav-text'
    },
    {
        title:'Explore',
        path:'/',
        Icon:<MdIcons.MdOutlineExplore/>,
        className:'nav-text'
    },
    {
        title:'Liked Videos',
        path:'/',
        Icon:<BiIcons.BiLike/>,
        className:'nav-text'
    },
    {
        title:'History',
        path:'/',
        Icon:<GrIcons.GrHistory/>,
        className:'nav-text'
    }
]