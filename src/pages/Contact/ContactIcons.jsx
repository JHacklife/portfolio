import { Email } from "@mui/icons-material"
import mailTo from "../../utils/mail"

function contactIcons({ size = "50" }) {
  return [
    {
      name: "Mail",
      icon: <Email sx={{ fontSize: `${size * 1.4}px`, mt: "-10px" }} />,
      url: mailTo
    },
    {
      name: "LinkedIn",
      icon: <i style={{ fontSize: `${size * 1.1}px` }} className="devicon-linkedin-plain" />,
      url: "https://www.linkedin.com/in/jonathanhacklife/"
    },
    {
      name: "GitLab",
      icon: <i style={{ fontSize: `${size * 1.1}px` }} className="devicon-gitlab-plain" />,
      url: "https://gitlab.com/jonathanhacklife"
    },
    {
      name: "Github",
      icon: <i style={{ fontSize: `${size * 1.1}px` }} className="devicon-github-original" />,
      url: "https://github.com/JHacklife"
    },
  ]
}

export default contactIcons