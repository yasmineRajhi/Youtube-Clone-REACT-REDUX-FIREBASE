import React, { useState } from 'react';
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
  "ASMR","Ionic",
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
  const handleClick = (item)=>{
    setActive(item)
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
