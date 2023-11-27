import {BrowserRouter as Router,Route,Routes,Redirect} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Skills from "./components/Skills/Skills";
import Stats from "./components/Stats/Stats";
import Work from "./components/Work/Work";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="holder">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
            </Routes>
        <Routes>
          <Route path="/" element={<AboutUs />} />
           
        </Routes>
        <Routes>
          <Route path="/" element={<Skills />} />
           
        </Routes>
        <Routes>
          <Route path="/" element={<Stats  />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Work />} />
        </Routes>
        <Routes>
          <Route path="/" element={<WorkProcess />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Services />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Testimonials  />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer/>} />
        </Routes>
               
      </Router>
    </div>
  );
}

export default App;
