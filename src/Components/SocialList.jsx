import React from "react";
import { IconList } from "../Styles/SocialList";
import { socialMedia } from "../Utils/socialMedia";

function SocialList() {
  return (
    <div>
      {socialMedia.map((item, index) => (
        <IconList href={item.url} key={index} target="_blank" rel="noreferrer">
          {item.icon}
        </IconList>
      ))}
    </div>
  );
}

export default SocialList;
