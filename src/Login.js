import { Button } from "@material-ui/core";
import React from "react";
import { auth,provider } from "./firebase";
import "./Login.css";

function Login(){

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
                <img 
                src="https://iconarchive.com/download/i86695/johanchalibert/mac-osx-yosemite/messages.ico" 
                alt="" />
                <h1> chatqwik</h1>
            </div>

            <Button onClick={signIn}> Sign In</Button>
        </div>
    );

}
export default Login;