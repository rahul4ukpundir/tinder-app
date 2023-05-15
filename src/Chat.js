import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import "./Chat.css";

const Chat = ({ img, name, message, timestamp }) => {
    return (
        <Link to={`/chat/${name}`}>
            <div className='chat'>
                <img src={img} />
                <div className='chat__info'>
                        <h3>{name}</h3>
                        <label>{message}</label>
                </div>
                <label>{timestamp}</label>
            </div>
        </Link>
      

    )
}

export default Chat
