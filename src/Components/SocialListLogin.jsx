import { IconList } from "../Styles/SocialList";
import { socialMediaLogin } from "../Utils/socialMediaLogin";

function SocialListLogin() {
  return (
    <div>
      {socialMediaLogin.map((item, index) => (
        <IconList href={item.url} key={index} target="_blank" rel="noreferrer">
          {item.icon}
        </IconList>
      ))}
    </div>
  );
}

export default SocialListLogin;