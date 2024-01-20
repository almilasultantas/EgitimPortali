import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assets/logo.png";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img
              alt=""
              src={Logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/myeducation">Eğitim Katoloğu</Nav.Link>
            <Nav.Link href="/myprofile">Profil</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;