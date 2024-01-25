import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    
        <Navbar className="bg-body-tertiary " bg="light" data-bs-theme="light" fixed="bottom"  >
      <Container style={{ maxHeight: '100px', fontSize:'15px'}}>
      <Navbar.Collapse >
            <Row>
                <Nav.Link href="/">Hakkımızda</Nav.Link>
                <Nav.Link href="/">Amacımız</Nav.Link>
                <Nav.Link href="/">Vizyonumuz</Nav.Link>
            </Row>
            
          </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-md-center">
        <Row>
            <Nav.Link href="/">Kariyer</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">Yardım ve Destek</Nav.Link>
        </Row>
          </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
            <Row>
                <Nav.Link href="/">İletişim</Nav.Link>
                <Nav.Link href="/">İstanbul</Nav.Link>
                <Nav.Link href="/">Sosyal Medya</Nav.Link>
            </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
 
    
  )
}

export default Footer
