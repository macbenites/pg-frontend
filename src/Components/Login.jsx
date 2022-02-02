import React from "react";
import Logo from "./Logo";
//import { Footer } from "./Footer";


export default function Login(){
    return (        
        <div>
            <Logo />
            <h3>Login to Your Account</h3>                       
                <form>
                    <div>
                        <input type= 'text' name= 'username' placeholder= 'Username'/>                   
                    </div>
                    <div>
                        <input type= 'password' name= 'password' placeholder= 'Password'/>                   
                    </div>                 
                    <div>     
                        <button type= 'submit'>Login</button>
                    </div>   
                    <p>/</p>
                    <div>
                        <input type= 'text' name= 'google' placeholder= 'SigIn with Google'/>                   
                    </div>
                    <div>
                        <input type= 'text' name= 'facebook' placeholder= 'SigIn with Facebook'/>                   
                    </div>                 
                    <div>
                        <input type= 'text' name= 'github' placeholder= 'SigIn with GitHub'/>
                    </div>                        
                </form> 
                {/*<Footer />*/}           
        </div>
                
    )
}