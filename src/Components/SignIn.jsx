import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { SignInDiv, InputSignName, InputSignUsername, InputSignNeighborhood, InputSignPosition, InputSignEmail, InputSignPassword, BtnCreate, LinkStyle } from "../Styles/SignIn";

function SignIn(){
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        username: '',
        neighborhood: '',
        position: '',
        email: '',
        password: ''
    });

    function handleClick(e){

        // if(input.name.length === 0){
        //     alert('Complete your name before creating the account');
        //     e.preventDefault();
        // }
        // else if(input.username.length === 0){
        //     alert('Complete your username before creating the account');
        //     e.preventDefault();
        // }
        // else if(input.neighborhood.length === 0){
        //     alert('Complete your neighborhood before creating the account');
        //     e.preventDefault();
        // }
        // else if(input.position.length === 0){
        //     alert('Complete your position before creating the account');
        //     e.preventDefault();
        // }
        // else if(input.email.length === 0){
        //     alert('Complete your email before creating the account');
        //     e.preventDefault();
        // }
        // else if(input.password.length === 0){
        //     alert('Complete your password before creating the account');
        //     e.preventDefault();
        // }
        
        // else{
            e.preventDefault();
            // dispatch(createAccount(input));
            alert('Cuenta creada con éxito');
            navigate('/home');
        // };
    };

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div>
            <Logo/>
            <NavBar/>
            <SignInDiv>
            <h1>Creá tu cuenta</h1>
            <h4>Ya tenes tu cuenta?<Link to='/login'>Log In</Link></h4>
            <form>
                <InputSignName>
                <div>
                    <input type='text' value={input.name} name='name' onChange={e => handleChange(e)} placeholder='Nombre'/>
                </div>
                </InputSignName>
                <InputSignUsername>
                <div>
                    <input type='text' value={input.username} name='username' onChange={e => handleChange(e)} placeholder='Usuario'/>
                </div>
                </InputSignUsername>
                <InputSignNeighborhood>
                <div>
                    <input type='text' value={input.neighborhood} name='neighborhood' onChange={e => handleChange(e)} placeholder='Barrio'/>
                </div>
                </InputSignNeighborhood>
                <InputSignPosition>
                <div>
                    <input type='text' value={input.position} name='position' onChange={e => handleChange(e)} placeholder='Posición'/>
                </div>
                </InputSignPosition>
                <InputSignEmail>
                <div>
                    <input type='text' value={input.email} name='email' onChange={e => handleChange(e)} placeholder='Mail'/>
                </div>
                </InputSignEmail>
                <InputSignPassword>
                <div>
                    <input type='text' value={input.password} name='password' onChange={e => handleChange(e)} placeholder='Contraseña'/>
                </div>
                </InputSignPassword>
                <BtnCreate>
                <div>
                    <button type='submit' onClick={e => {handleClick(e)}}>Crear cuenta</button>
                </div>
                </BtnCreate>
            </form>
            </SignInDiv>
        </div>
    );
};

export default SignIn;