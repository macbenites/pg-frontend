import React from "react";
import Logo from "./Logo";
import { LoginDiv, InputDiv1, BtnNetworks, BtnDiv } from "../Styles/Login.js";
import SocialListLogin from "./SocialListLogin";



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
                    <span>/</span>
                    <div>
                        <BtnNetworks>                         
                            <button type= 'submit'><span><SocialListLogin /></span>Iniciar sesión con Google</button>                   
                        </BtnNetworks>
                        <BtnNetworks>
                            <button type= 'submit'>Iniciar sesión con Facebook</button>                   
                        </BtnNetworks>                 
                        <BtnNetworks>
                            <button type= 'submit'>Iniciar sesión con GitHub</button>
                        </BtnNetworks>    
                    </div>                        
                </form>          
        </LoginDiv>
        </div>        
    )
}