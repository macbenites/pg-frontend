import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { joinMatch, showUsers } from '../Redux/Actions'
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { SelectSearch, BtnJoinStyle, TextJoin, /*InputPosition,*/ BtnBack } from '../Styles/JoinMatch';


function JoinMatch(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const addPlayer = useSelector((state) => state.players);
    const users = useSelector((state) => state.userState)
    /* const [input, setInput] = useState({
        user_name:'',
        //position: ''
    }); */

    useEffect(()=>{
        dispatch(showUsers());
    },[dispatch]);

  /*   function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }; */

    console.log(addPlayer);

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
        console.log(e.target.value);
    };

    return(
        <form>
            <BtnBack onClick={e => handleBackClick(e)}>Volver</BtnBack>
            <TextJoin>Confirmar Asistencia</TextJoin>
            <SelectSearch>
                    <p>{users.user_name}</p>
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
