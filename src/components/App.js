import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// {/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar/>
      {<h1 id ="home" >Home</h1>}
      {<h2 id = "about">About</h2>}
    </div>
  );
}

export default App;
