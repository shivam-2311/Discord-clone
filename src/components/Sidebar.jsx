import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([])
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])
    const handelAddChannel = () => {
        const channelName = prompt('enter a new channel name')
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            })
        }
    }
    return (
        <div className='sidebar'>
            {/* <h1>sidebar</h1> */}
            <div className="sidebar__top">
                <h3>shivam</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handelAddChannel} className='sidebar__addChannel' />
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => {
                        return <SidebarChannel key={id} id={id} channelName={channel.channelName} />

                    })}

                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large' />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
