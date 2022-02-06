import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as VSCIcons from "react-icons/vsc";
import Sidebar from "../Sidebar/Sidebar";
import "./_header.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${input}`);
  };
  return (
    <div className="header">
      <>
        <nav className="NAV">
          <div className="Left-side-of-navbar">
            <Sidebar />
          </div>
          <div className="middle-of-navbar">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="navbar__search__input"
              />
            </form>
            <button className="navbar__search__btn">
              <AiIcons.AiOutlineSearch className="search__icon__nav__btn" />
            </button>
            <div className="middle__nav__mic__container">
              <IoIcons.IoMdMic className="middle__nav__mic" />
            </div>
          </div>
          <div className="right-of-navbar">
            <Io5Icons.IoAppsOutline className="right__nav__apps" />
            <AiIcons.AiOutlineMore className="right__nav__more" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU" alt="avatar" className="right__nav__connect__btn__img"/>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
