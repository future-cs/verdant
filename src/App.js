import "./general.css";
import "./Hero.css";
import "./MainComponent.css";

import NavComponent from "./components/Nav";
import Hero from "./components/Hero";
import List from "./components/List";
import CTA from "./components/CTA";
import FooterComponent from "./components/Footer";

function App() {
  return (
    <div className="container">
      <NavComponent />
      <Hero />
      <List />
      <CTA id="signup" />
      <FooterComponent />
    </div>
  );
}

export default App;
