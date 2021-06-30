import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

const ChatHeader = ({ channelName }) => {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>{channelName}</h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon fontSize='large' />
                <LocationOnIcon fontSize='large' />
                <GroupIcon fontSize='large' />
                <div className="chatHeader__search">
                    <input type="text" placeholder='search' />
                    <SearchIcon fontSize='large' />
                </div>
                <SendIcon fontSize='large' />
                <HelpIcon fontSize='large' />
            </div>
        </div>
    )
}

export default ChatHeader
