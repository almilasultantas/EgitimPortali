import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function Registration() {
  return (
    <Container className="col-md-5 mx-auto">
      <Form >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="3">
          Ad
        </Form.Label>
        <Col sm="9">
          <Form.Control  placeholder="Ad" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
        <Form.Label column sm="3">
          Soyad
        </Form.Label>
        <Col sm="9">
          <Form.Control  placeholder="Soyad" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="9">
          <Form.Control type="email" placeholder="name@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Password
        </Form.Label>
        <Col sm="9">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
    <Button variant="primary">Kaydol</Button>{' '}
    </Container>
    
  );
}

export default Registration;