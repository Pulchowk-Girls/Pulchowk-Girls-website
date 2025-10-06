import "./App.css";
import NavBar from "./components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Sponsers from "./Pages/Sponsers";
import ContactUs from "./Pages/ContactUs";
import Committee from "./Pages/Committee";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <Events />
      <Sponsers />
      <Committee />
      <ContactUs />
    </>
  );
}

export default App;
