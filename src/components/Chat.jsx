import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import Messages from './Messages';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { selectUser } from '../features/userSlice';
import { useEffect } from 'react';
import db from '../firebase';
import firebase from 'firebase'

const Chat = () => {
    // const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages')
                .orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data())))
        };
    }, [channelId])
    const sendMessages = (e) => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        })
        setInput('');
    }
    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">

                {messages.map((message) => {
                    return <Messages
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user} />
                })}

            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input disabled={!channelId} value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='send message' />
                    <button onClick={sendMessages} className='chat__inputButton' type='submit'>send message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmotionsIcon fontSize='large' />
                </div>
            </div>

        </div>
    )
}

export default Chat
