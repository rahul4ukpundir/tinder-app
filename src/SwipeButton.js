import React from 'react'
import { MdReplay, MdClose, MdFavorite, MdFlashOn } from 'react-icons/md';
// import { IoClose } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';
import { GrFavorite } from 'react-icons/gr';
import { FcFlashOn } from 'react-icons/fc';
import "./SwipeButton.css"



const SwipeButton = () => {
    return (
        <div className='swipeButton'>
            <MdReplay className='swipeButton_replay'/>
            <MdClose className='swipeButton_close'/>
            <AiOutlineStar className='swipeButton_star' />
            <MdFavorite className='swipeButton_favorite' />
            <MdFlashOn className='swipeButton_flashon'/>
        </div>
    )
}

export default SwipeButton
