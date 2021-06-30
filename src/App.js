import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is', authUser);
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {
        user ? (
          <>
            <Sidebar />
            <Chat />
          </>) :
          (<Login />)
      }
    </div>
  );
}

export default App;
