import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/saimaung'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://linkedin.com/in/saiwaimaung'
  }
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((social, index) => {
          return (
            <Link href={social.path} key={index} className={iconStyles}>
              {social.icon}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Social
