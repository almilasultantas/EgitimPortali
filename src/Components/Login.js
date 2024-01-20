import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function Login() {
  return (
    <Container className="col-md-5 mx-auto">
      <Form >
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
      <Form.Group as={Row} className='mb-3'>
      <Col sm="6">
      <Button variant="primary">Giriş Yap</Button>{' '}
        </Col>
        <Col sm="6">
      <Button variant="primary" href="/registration">Kaydol</Button>{' '}
        </Col>
      
     
      </Form.Group>
    </Form>

    
    </Container>
    
  );
}

export default Login;