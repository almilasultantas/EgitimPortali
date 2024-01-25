import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CustomerList() {
  return (
    <div>
      <h1 style={{textAlign:"left", marginLeft:"10%"}}>Öğrenci İlerleme Paneli</h1>
      <Container className="col-md-5 mx-auto" style={{marginTop:"5%"}}>
        <Form >
          
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column >
              Şeyma PEHLİVAN
            </Form.Label>
            <Col >
            <ProgressBar striped variant="info" now={20} style={{marginTop:'3%'}}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column >
              Şeyma PEHLİVAN
            </Form.Label>
            <Col >
            <ProgressBar striped variant="info" now={70} style={{marginTop:'3%'}}/>
            </Col>
          </Form.Group>
      
        </Form>
        <Button variant="primary" href="/admindashboard">Admin Sayfası</Button>{' '}
    
      </Container>
      
    </div>
  )
}

export default CustomerList