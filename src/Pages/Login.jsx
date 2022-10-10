/* import { useSelector } from "react-redux"; */
import {logInUser} from "../Services/API";
import { connectUser } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, {useEffect } from 'react';

function Login() {

    useEffect(()=> {
        let emailInput = document.getElementById("username");
        let rememberMe = document.getElementById("remember-me");
        if(localStorage.checkbox) {
            emailInput.value = localStorage.getItem("userMail");
            rememberMe.checked = true;
        }
        else {
            emailInput.value = "";
            rememberMe.checked = false;
        }
    }, [])

    let userMail = '';
    let userPwd = '';
        
    let dispatch = useDispatch()
    let navigate = useNavigate();
    
    async function handleConnect() {
        let response = await logInUser(userMail, userPwd);
        if (response !== "Error") {
            dispatch(connectUser(response))
            navigate("/profile"); 
        }

        else {
            console.log("Error during connexion")
        }  
    }
 
    function handleSubmit(e) {

        e.preventDefault();

        let rememberMe = document.getElementById("remember-me");    
        userMail = document.getElementById('username').value;
        userPwd = document.getElementById('password').value;
      
        if (rememberMe.checked) {
            localStorage.setItem("userMail", userMail); 
            localStorage.setItem("checkbox",  rememberMe.checked);
           
        } else { 
            localStorage.clear();
        } 
       
        handleConnect() 
        
    }
      
    return (  
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label  htmlFor="username">Username</label ><input type="text" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label  htmlFor="password">Password</label ><input type="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me" >Remember me</label>
                    </div>
                
                    <button className="sign-in-button">Sign In</button>
        
                </form>
            </section>
        </main>
        );
}

export default Login;
