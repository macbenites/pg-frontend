import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

function SingIn(){
    const dispatch = useDispatch()
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

        if(input.name.length === 0){
            alert('Complete your name before creating the account');
            e.preventDefault();
        }
        else if(input.username.length === 0){
            alert('Complete your username before creating the account');
            e.preventDefault();
        }
        else if(input.neighborhood.length === 0){
            alert('Complete your neighborhood before creating the account');
            e.preventDefault();
        }
        else if(input.position.length === 0){
            alert('Complete your position before creating the account');
            e.preventDefault();
        }
        else if(input.email.length === 0){
            alert('Complete your email before creating the account');
            e.preventDefault();
        }
        else if(input.password.length === 0){
            alert('Complete your password before creating the account');
            e.preventDefault();
        }
        
        else{
            e.preventDefault();
            dispatch(createAccount(input));
            alert('Account created succesfully');
            navigate('/home');
        };
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
            <h1>Create new account</h1>
            <h4>Already A Member? <Link to='/login'>Log In</Link></h4>
            <form>
                <div>
                    <input type='text' value={input.name} name='name' onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type='text' value={input.username} name='username' onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type='text' value={input.neighborhood} name='neighborhood' onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type='text' value={input.position} name='position' onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type='text' value={input.email} name='email' onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <input type='text' value={input.password} name='password' onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <button type='submit' onClick={e => {handleClick(e)}}>Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default SingIn;