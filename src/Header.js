import React from 'react'
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill, BsFillChatLeftTextFill, BsArrowBarLeft } from 'react-icons/bs';
import { MdArrowBack } from 'react-icons/md';
// import { IoClose } from 'react-icons/io';
const Header = ({ backbutton }) => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      {
        backbutton ?
          <MdArrowBack onClick={() => navigate(backbutton)} /> :
          <BsFillPersonFill />

      }

      <Link to="/">
        <img src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg' />
      </Link>

      <Link to="/chat">
        <BsFillChatLeftTextFill />
      </Link>

    </div>
  )
}

export default Header
