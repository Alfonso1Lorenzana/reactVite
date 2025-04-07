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
          <Link to="/portfolio">Test</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume.txt">Resume</Link>
        </li>       
      </ul>

    </header>
  )
}

export default Header
