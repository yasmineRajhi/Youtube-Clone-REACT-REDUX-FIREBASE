import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../../Redux/Actions/Video.action';
import './_categories.scss'

const category = [
  "All",
  "React JS",
  "Angular",
  "Bootstrap",
  "Redux",
  "API",
  "Firebase",
  "Ionic",
  "Music",
  "Mix",
  "BTS",
  "Kpop",
  "K-Drama",
  "jazz",
  "ASMR",
  "Ionic",
  "Music",
  "Mix",
  "BTS",
  "Kpop",
  "K-Drama",
  "jazz",
  "ASMR"
]

const Categories = () => {
  const [active,setActive] = useState('All')
  const dispatch = useDispatch()
  const handleClick = (item)=>{
    setActive(item)
    if(item==='All'){
      dispatch(getVideosByCategory())
    }else{
      dispatch(getVideosByCategory(item))
    }
  }
  return <div className="Bar">
    {
      category.map((item, i) => (
        <span key={i}
        onClick={()=>handleClick(item)}
        className={active === item?'active':''}
        >{item}</span>
      ))
    }
  </div>;
};

export default Categories;
