import React, { useState } from 'react'
import "./ChatScreen.css";

const ChatScreen = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(
        [
            {
                name: "Jannivi",
                imageUrl: "https://wallpapercave.com/wp/wp7097182.jpg",
                message: "How are you?"
            },
            {
                name: "Anil",
                imageUrl: "https://wallpapercave.com/wp/wp7097182.jpg",
                message: "who are you?"
            },
            {
                message: "How are you Jannvi?"
            }
        ]
    )

    const sendMessage = (e) =>{
        e.preventDefault();
        setMessages([
            ...messages,
           { message: input }
        ])
        setInput("")
    }
    return (
        <div className='chatscreen'>
            <p className='timestamp'>Your match with Jannivi AT 12/05/2023</p>
           <div className='chatscreen_body'>
           {
               
               messages?.map((message) => (
                   message.name?

                   <div className='chatscreen__message'>
                       <img src={message.imageUrl} />
                       <p className='chatscreen__text'>{message.message}</p>
                   </div>
                   :
                   <div className='chatscreen__message'>
                   <p className='chatscreen__textUser'>{message.message}</p>
                   </div>

               ))
           }
           </div>
            
            <form className='chatscreen_chatbox'>
                <input type="text" value={input} placeholder='Type message here' onChange={(e)=> setInput(e.target.value)}/>
                <button type='submit' onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
