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
            <h3>Ingresa a tu cuenta</h3>
                <form>
                    <div>
                        <InputDiv1>
                            <input type= 'text' name= 'username' placeholder= 'Usuario'/>                   
                        </InputDiv1>
                        <InputDiv1>
                            <input type= 'password' name= 'password' placeholder= 'Contraseña'/>                   
                        </InputDiv1>                 
                        <BtnDiv>     
                            <button type= 'submit'>Ingresar</button>
                        </BtnDiv> 
                    </div>  
                    <p>/</p>
                    <div>
                        <InputDiv2>
                            <input type= 'text' name= 'google' placeholder= 'Iniciar sesión con Google'/>                   
                        </InputDiv2>
                        <InputDiv2>
                            <input type= 'text' name= 'facebook' placeholder= 'Iniciar sesión con Facebook'/>                   
                        </InputDiv2>                 
                        <InputDiv2>
                            <input type= 'text' name= 'github' placeholder= 'Iniciar sesión con GitHub'/>
                        </InputDiv2>    
                    </div>                        
                </form>          
        </LoginDiv>
        </div>        
    )
}