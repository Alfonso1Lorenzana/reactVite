import photo from "../assets/alfonso1.jpeg";

// This folder, 
function AboutMe() {

  return (
    <section>
      <h1>About Me</h1>
      <img className="about-photo" src={photo} alt="photo of me"/>
      <p>Bio</p>
    </section>
  )
}

export default AboutMe