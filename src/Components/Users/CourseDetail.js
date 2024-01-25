import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoReact from '../../Assets/logo512.png';
import Button from 'react-bootstrap/Button';

function CourseDetail() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
        <img alt=""
              src={logoReact}
              width="100px"
              height="100px"
              className="d-inline-block align-top"  class="center" />
        </Col>
        <Col xs lg="7">
          <h1>ReactJs Kursu İçerik</h1>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>

          </Col>
        <Col xs lg="2">
          <p>Kursiyer</p>
          <p>Kurs Tipi</p>
          <p>Ücret</p>
          <Button variant="outline-primary">Satın Al</Button>
        </Col>
      </Row>
      
    </Container>
  );
  
}

export default CourseDetail