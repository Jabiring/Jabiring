import React, { ReactNode } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub/>,
    path: "https://github.com/Amal474",
  },
  {
    icon: <FaLinkedin/>,
    path: "https://www.linkedin.com/in/mohammed-amal-21b094141/",
  },
]

interface Props {
  containerStyles?: string,
  iconStyles?: string,
}

export default function Socials({containerStyles, iconStyles}: Props) {

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  );
}