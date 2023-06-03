import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Home from "./componets/home/Home";
import About from "./componets/about/About";
import { Contact } from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";
import Skills from "./componets/skills/Skills";
import Resume from "./componets/resume/Resume";
import Projetcs from "./componets/projects/Projetcs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Skills/>
        <Projetcs/>
        <About/>
       
        <Contact/>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/resume" element={Resume}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
