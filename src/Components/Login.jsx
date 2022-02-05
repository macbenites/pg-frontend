import React from "react";
import Logo from "./Logo";
import { LoginDiv, InputDiv1, BtnNetworks, BtnDiv } from "../Styles/Login.js";
import SocialListLogin from "./SocialListLogin";
import { useForm } from "react-hook-form";



export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (event) => {
        console.log(event);
        event.target.reset();
    }

    return (
        <div>
            <div>
                <Logo />
            </div>
        <LoginDiv>            
            <h3>Ingresa a tu cuenta</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <InputDiv1>
                            <input 
                                type= "text"
                                name= "username" 
                                placeholder= "Usuario"
                                {...register("username", {
                                        required: {
                                            value: true, 
                                            message: '**Campo requerido'
                                        },
                                        pattern:{
                                            value: /^[a-zA-Z0-9_-]{4,20}$/,
                                            message: '**El formato del usuario ingresado no es correcto'
                                        } 
                                    })
                                }
                            />
                            <span>{errors?.username?.message}</span>                   
                        </InputDiv1>
                        <InputDiv1>
                            <input 
                                type= 'password' 
                                name= 'password' 
                                placeholder= 'Contraseña'
                                {...register("password", {
                                        required: {
                                            value: true, 
                                            message: '**Campo requerido'
                                        },
                                        pattern:{
                                            value: /^.{6,12}$/,
                                            message: '**La contraseña debe contener entre 4 y 12 caracteres'
                                        }, 
                                    })
                                }
                            /> 
                            <span>{errors?.password?.message}</span>                  
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