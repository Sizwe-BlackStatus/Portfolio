import './App.css';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <div className="headings">
        <h2 className="portfolio-heading">Portfolio</h2>
        <h1 className="projects-heading">My Projects</h1>
      </div>
      <Projects />
    </div>
  );
}

export default App;
