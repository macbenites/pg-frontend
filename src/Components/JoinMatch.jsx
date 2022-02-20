import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinMatch, showUsers } from '../Redux/Actions'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { SelectSearch, BtnJoinStyle, TextJoin, BtnBack } from '../Styles/JoinMatch';


function JoinMatch(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const addPlayer = useSelector((state) => state.players);
    const users = useSelector((state) => state.users)
    const [input, setInput] = useState({
        user_name:'',
    });

    useEffect(()=>{
        dispatch(showUsers());
    },[dispatch]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function handleBackClick(e){
        navigate('/home/games');
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch(id, input.user_name));
        Swal.fire({
            icon: "success",
            title: "Te has unido a este partido con éxito!!",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate('/home');
    };

    return(
        <form>
            <BtnBack onClick={e => handleBackClick(e)}>Volver</BtnBack>
            <TextJoin>Seleccioná tu usuario o el de un amigo para unirse a este partido</TextJoin>
            <SelectSearch
                onChange={e => handleChange(e)}
                value={input.user_name}
                name='user_name'>
                <option value= ''>Usuario</option>
                {users.map((element) =>(
                    <option key = {element.id} value = {element.user_name}>{element.user_name}</option>
                ))}    
            </SelectSearch>
            {/*<InputPosition 
                placeholder='Posición' 
                onChange={e => handleChange(e)}
                value={input.position}
                name='position'> 
            </InputPosition>*/}
            <BtnJoinStyle primary onClick={e => handleClick(e)}>Unirse</BtnJoinStyle>
        </form>
    );
};

export default JoinMatch;
