import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinMatch, showUsers } from '../Redux/Actions'
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { SelectSearch, BtnJoinStyle, TextJoin, BtnBack } from '../Styles/JoinMatch';


function JoinMatch(){    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const users = useSelector((state) => state.userState)

    useEffect(()=>{
        dispatch(showUsers());
    },[dispatch]);

    function handleBackClick(e){
        navigate('/home/games');
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(joinMatch(id, users.user_name));
        Swal.fire({
            icon: "success",
            title: "Te has unido a este partido con éxito!!",
            showConfirmButton: false,
            timer: 1500,
          });
        navigate('/home/games');
    };

    return(
        <form>
            <BtnBack onClick={e => handleBackClick(e)}>Volver</BtnBack>
            <TextJoin>Confirmar Asistencia</TextJoin>
            <SelectSearch>
                    <p>{users.user_name}</p>
            </SelectSearch>
            <BtnJoinStyle primary onClick={e => handleClick(e)}>Unirse</BtnJoinStyle>
        </form>
    );
};

export default JoinMatch;
