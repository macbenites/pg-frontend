import React from "react";
import Logo from "./Logo";
import { LoginDiv, InputDiv1, BtnNetworks, BtnDiv } from "../Styles/Login.js";
import SocialListLogin from "./SocialListLogin";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



export default function Login(){

    //742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com// credencial google
    //658093002098339 -- creedencial Facebook

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    const componentClicked = () => {
        console.log("logueado")
    }

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
                           {/*  <button type= 'submit'><span><SocialListLogin /></span>Iniciar sesión con Google</button>  */}
                            <GoogleLogin
                                clientId="742910100228-bf1uk5tddd041i1fvd8bjcg77fk7qkmo.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />                  
                        </BtnNetworks>
                        <BtnNetworks>
                            {/* <button type= 'submit'>Iniciar sesión con Facebook</button>     */}    
                            <FacebookLogin
                                appId="658093002098339"
                                autoLoad={false}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                callback={responseFacebook} 
                                icon="fa-facebook"
                                textButton="Ingresa con facebook"
                            />           
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