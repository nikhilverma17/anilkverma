import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Features from "./components/pages/features";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Contact from "./components/pages/contact";
import Demo from "./components/pages/demo";
import MyTeam from "./components/pages/Myteam";
import './index.css'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Demo />
      <Client />
      <MyTeam/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;












