import {PlayerDiv} from "../Styles/Player.js"

const Player = ({data}) => {

    //console.log(data.nombre)

     return(
         <PlayerDiv>
             <img src={data.image} alt="" />
             <h3>{data.user_name ? data.user_name : data.email?.split("@")[0]}</h3>
             <h6>{data.neighborhood ? data.neighborhood : "Barrio desconocido"}</h6>
         </PlayerDiv>
     )
}   

export default Player