import React from "react";
import Logo from "./Logo";
import { LoginDiv, InputDiv1, InputDiv2, BtnDiv } from "../Styles/Login.js";



export default function Login(){
    return (
        <div>
            <div>
                <Logo />
            </div>
        <LoginDiv>            
            <h3>Login to Your Account</h3>
                <form>
                    <div>
                        <InputDiv1>
                            <input type= 'text' name= 'username' placeholder= 'Username'/>                   
                        </InputDiv1>
                        <InputDiv1>
                            <input type= 'password' name= 'password' placeholder= 'Password'/>                   
                        </InputDiv1>                 
                        <InputDiv1>     
                            <button type= 'submit'>Login</button>
                        </InputDiv1> 
                    </div>  
                    <p>/</p>
                    <div>
                        <InputDiv2>
                            <input type= 'text' name= 'google' placeholder= 'Sig In with Google'/>                   
                        </InputDiv2>
                        <InputDiv2>
                            <input type= 'text' name= 'facebook' placeholder= 'Sig In with Facebook'/>                   
                        </InputDiv2>                 
                        <InputDiv2>
                            <input type= 'text' name= 'github' placeholder= 'Sig In with GitHub'/>
                        </InputDiv2>
                    </div>                        
                </form>          
        </LoginDiv>
        </div>        
    )
}