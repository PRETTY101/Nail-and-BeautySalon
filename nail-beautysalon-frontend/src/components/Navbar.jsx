import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="salon-navbar">
      <Container>

        {/* Brand */}
        <Navbar.Brand as={Link} to="/">
          <span className="brand-name">NAIL & BEAUTY</span>
          <span className="brand-subtitle">SALON</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <div className="nav-icons">
            <Link to="/login" className="nav-icon login-icon">
              <FaUser />
            </Link>

            <Link to="/appointment" className="nav-icon book-icon">
              <FaCalendarAlt />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;