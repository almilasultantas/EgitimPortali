import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assets/logo.png";
import Nav from 'react-bootstrap/Nav';
function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary " bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><img
              alt=""
              src={Logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/myeducation">Eğitim Katoloğu</Nav.Link>
            <Nav.Link href="/myprofile">Profil</Nav.Link>
            <Nav.Link href="/login">Pricing</Nav.Link>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;