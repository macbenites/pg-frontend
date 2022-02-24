import { PlayerDiv, ImgDiv, ContentDiv } from "../Styles/component/Player.js";
import { LinkTo } from "../Styles/reusable/LinkTo.js";

const Player = ({ data }) => {
  return (
    <LinkTo to={`/users/${data.id}`}>
      <PlayerDiv>
        <ImgDiv>
          <img src={data.image} alt="Player" />
        </ImgDiv>
        <ContentDiv>
          <div>
            <h3>{data.name ? data.name : "Nombre no definido"}</h3>
            <p>
              {data.player_position
                ? data.player_position
                : "Posición no definida"}
            </p>            
          </div>
          <div>
            {/* <h4>
              {data.user_name
                ? data.user_name.slice(0, 15)
                : data.email?.split("@")[0].slice(0, 10)}
            </h4> */}
            <p>
              {data.neighborhood ? data.neighborhood : "Barrio desconocido"}
            </p>
            <h5>{data.email ? data.email : "Email no definido"}</h5>
          </div>
        </ContentDiv>
      </PlayerDiv>
    </LinkTo>
  );
};

export default Player;
