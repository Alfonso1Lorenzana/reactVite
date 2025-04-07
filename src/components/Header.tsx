import {Link} from 'react-router-dom';

function Header() {

  return (
    <header>
    <p><b>Alfonso Lorenzana</b></p>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="/resume.txt">Resume</a>
        </li>       
      </ul>

    </header>
  )
}

export default Header
