import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import "../styles/Styles.css";

function NavBar() {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 76; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => handleNavClick("home")}
        >
          <img
            src="/Logo.png"
            alt="Logo"
            style={{
              height: "40px",
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("AboutUs")}>
              About Us
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Events")}>Events</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Sponsers")}>
              Sponsors
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("Committee")}>
              Committee
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("ContactUs")}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
