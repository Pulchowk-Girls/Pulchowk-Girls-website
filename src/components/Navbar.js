import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import "../styles/Styles.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Events">Events</Nav.Link>
            <Nav.Link href="#Sponsers">Sponsers</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
