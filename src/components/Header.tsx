function Header() {

  return (
    <header>
    <p><b>Alfonso Lorenzana</b></p>
      <ul>
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          //let rows = string;
          <a href="/contact">Contact</a>
          <label htmlFor="name">Name:</label><br></br>
          <textarea id="name"></textarea>
        </li>
        <li>
          <a href="/resume.txt">Resume</a>
        </li>       
      </ul>

    </header>
  )
}

export default Header
