import React from 'react'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar } from '@material-ui/core';


const Messages = ({ timestamp, message, user }) => {
    return (
        <div className='messages'>
            <Avatar fontSize='large' src={user.photo} />
            <div className="message__info">
                <h4>{user.displayName} <span className="message__timestamp">
                    {new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
