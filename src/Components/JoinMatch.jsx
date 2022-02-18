import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinMatch } from '../Redux/Actions'
import { useState } from 'react';

function JoinMatch(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        user:'',
        position: ''
    });

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch(input.user));
        alert('Te has unido con éxito');
        navigate('/home');
        console.log(input.user)
    };

    return(
        <form>
            <input 
            placeholder='Usuario' 
            onChange={e => handleChange(e)}
            value={input.user}
            name='user'
            />
            <input 
            placeholder='Posición' 
            onChange={e => handleChange(e)}
            value={input.position}
            name='position'
            />
            <button onClick={e => handleClick(e)}>Unirme</button>
        </form>
    );
};

export default JoinMatch;
