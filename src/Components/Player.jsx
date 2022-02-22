import {PlayerDiv} from "../Styles/component/Player.js"

const Player = ({data}) => {

    //console.log(data.nombre)

     return(
         <PlayerDiv>
             <img src={data.image} alt="Player" />
             <h3>{data.name ? data.name : "Nombre no definido"}</h3>
             <h4>{data.user_name ? data.user_name : data.email?.split("@")[0]}</h4>
             <h5>{data.player_position ? data.player_position : "Posición no definida"}</h5>
             <h5>{data.neighborhood ? data.neighborhood : "Barrio desconocido"}</h5>
         </PlayerDiv>
     )
}   

export default Player