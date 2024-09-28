// Sociais
import { FaGithub } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>

        <h3>Onde me encontrar</h3>

        <ul>
          <li><FaGithub /> <a href="https://github.com/devwebstudent" target="_blank">GitHub</a></li>

          <li><FaSteam /> <a href="#">Steam</a>
          </li>          
        </ul>

    </footer>
  )
}

export default Footer