import { useSelector } from "react-redux";
import {
  CardContainer,
  ImgCard,
  Content,
  LinkCourt,
  BtnReserve,
} from "../Styles/component/CardsCity";
// import phone from "../Assets/img/phone.svg";
// import schedule from "../Assets/img/shedule.svg";
// import web from "../Assets/img/web.svg";
import { LinkTo } from "../Styles/reusable/LinkTo";
const CardsCourt = ({ props }) => {
  const { userState } = useSelector((state) => state);
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
          <LinkCourt to={`/sportcenters/${props.id}`}>
            <h3>
              {props.name.length > 20 ? props.name.slice(0, 20) : props.name}
            </h3>
          </LinkCourt>
          <p>{props.district}</p>
          <p>{props.street}</p>
        </div>
        {userState?.role === "user" ? (
          <LinkTo to={`/reserveCourt/${props.name}`}>
            <BtnReserve>Reservar</BtnReserve>
          </LinkTo>
        ) : null}
      </Content>
    </CardContainer>
  );
};
// const IconsCity = () => {
//   return (
//     <IconsContainer>
//       <img src={phone} alt="phone" />
//       <img src={schedule} alt="schedule" />
//       <img src={web} alt="web" />
//     </IconsContainer>
//   );
// };

export default CardsCourt;
