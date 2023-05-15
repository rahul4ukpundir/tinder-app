import React from 'react'
import Chat from './Chat'


const Chats = () => {
  return (
    <div className='chats'>
     <Chat img = {"https://wallpapercave.com/wp/wp7097182.jpg"} name = "Jannivi" message="I am good" timestamp="35 minutes ago" />
     <Chat img = {"https://www.hayfestival.com/images/product/large/19068.jpg"} name = "Anil" message="how are you?" timestamp="5 minutes ago" />
     <Chat img = {"https://wallpapercave.com/wp/wp5120843.jpg"} name = "Amirta" message="What's up" timestamp="45 minutes ago" />
     <Chat img = {"https://i.pinimg.com/736x/b9/ab/17/b9ab173b81ffb54cfb509fed9011a53c.jpg"} name = "Katrina" message="What's up" timestamp="15 minutes ago" />
     <Chat img = {"https://cdn.fansshare.com/photograph/beautifulgirls/beautiful-girl-wallpapers-pictures-for-facebook-1429221492.jpg"} name = "Kareena" message="What's up" timestamp="05 minutes ago" />
    </div>
  )
}

export default Chats
