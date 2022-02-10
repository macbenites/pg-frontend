import {PlayerDiv} from "../Styles/Player.js"

const Player = ({data}) => {

    console.log(data.nombre)

     return(
         <PlayerDiv>
             <img src={data.imagen_perfil} />
             <h3>{data.nombre}</h3>
             <h6>{data.barrio}</h6>
         </PlayerDiv>
     )
}

export default Player