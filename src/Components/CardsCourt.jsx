import {
  CardContainer,
  ImgCard,
  Content,
  IconsContainer,
} from "../Styles/component/CardsCity";
import phone from "../Assets/img/phone.svg";
import schedule from "../Assets/img/shedule.svg";
import web from "../Assets/img/web.svg";
import { Link } from "react-router-dom";

const CardsCourt = ({ props }) => {

  return (
    <CardContainer> 
      <ImgCard>
        <img
          src="https://user-images.githubusercontent.com/59841113/153101175-a51d1d35-d901-47b7-a8dd-dd82e2f3285b.jpg"
          alt="img"
        />
      </ImgCard>
      <Content>
        <div>
          <h6>
            {props.name.length > 15 ? props.name.slice(0, 15) : props.name}
          </h6>
          <p>{props.street + " " + props.streetNumber}</p>
          <p>{props.city}</p>
          <Link to={`/reserveCourt/${props.name}`}>
            <button>Reservar</button>
          </Link>
        </div>
        {/*<Map />*/}
        <IconsCity />
      </Content>
    </CardContainer>
  );
};
const IconsCity = () => {
  return (
    <IconsContainer>
      <img src={phone} alt="phone" />
      <img src={schedule} alt="schedule" />
      <img src={web} alt="web" />
    </IconsContainer>
  );
};

export default CardsCourt;
