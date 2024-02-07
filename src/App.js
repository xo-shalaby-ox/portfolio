import "./App.css";
import { About } from "./components/About/About";
import { Contacts } from "./components/contacts/Contacts";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { Services } from "./components/services/Services";
import { Skill } from "./components/skill/Skill";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}



export default App;
