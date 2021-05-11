import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import './App.css';
import Chatqwik from "./Chatqwik";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      }
      else{
        //user is not logged in
        dispatch(logout())
      }
    })
  }, [])


  return (
    <div className="app">
    {user ? <Chatqwik /> : <Login /> }
         
    </div>
  );
}

export default App;
