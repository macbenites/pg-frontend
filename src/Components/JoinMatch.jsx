import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinMatch } from '../Redux/Actions'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function JoinMatch(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const addPlayer = useSelector((state) => state.players)
    const [input, setInput] = useState({
        user_name:'',
        position: ''
    });

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    console.log(input);
    console.log(addPlayer);

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch(id, input.user_name));
        alert('Te has unido con éxito');
        navigate('/home');
        console.log(e.target.value);
    };

    return(
        
        <form>
            <input 
            placeholder='Usuario' 
            onChange={e => handleChange(e)}
            value={input.user_name}
            name='user_name'
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