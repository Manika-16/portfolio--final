
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home" className="home">
      <h1>Welcome!</h1>
      <p>Hi, I'm Manika Jain, a 2nd year student at Delhi Technological University pursuing bachelor's degree in Software Engineering. I'm a passionate developer.</p>
    </section>
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I enjoy dancing and expressing myself through drawing, which allows me to explore my creativity. I'm also interested in learning web development, as it combines my passion for design with the technical skills to create interactive online experiences.






</p>
    </section>
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of the project</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of the project</p>
        </div>
      </div>
      <div className="project-list">
        <div className="project">
          <h3>Project 3</h3>
          <p>Description of the project</p>
        </div>
        <div className="project">
          <h3>Project 4</h3>
          <p>Description of the project</p>
        </div>
      </div>
    </section>
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        
        <input type="text" name="name" placeholder="Name"/>
        
        
        <input type="email" name="email" placeholder="Email" />
        
        
        <textarea name="message" placeholder="Message"></textarea>
        
        <button type="submit">Send</button>
      </form>
    </section>
    </div>
  );
}

export default App;
