import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';
function oldRegistration() {

  const[FistName,setFirstName]=useState("")
  const[LastName,setLastName]=useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
 

  const handleSave=(e)=>{
    e.preventDefault();
    const url ="https://localhost:7237/api/Users/registration"
    const data= {
      FirstName : FistName,
      LastName: LastName,
      Email:Email,
      Password:Password,

    }
    axios.post(url,data)
    .then((result)=>{
      const dt= result.data;
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Container className="col-md-5 mx-auto">
      <Form >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="3" >
          Ad
        </Form.Label>
        <Col sm="9">
          <Form.Control  placeholder="Ad" onChange={(e)=>setFirstName(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextSurname">
        <Form.Label column sm="3" >
          Soyad
        </Form.Label>
        <Col sm="9">
          <Form.Control  placeholder="Soyad" onChange={(e)=>setLastName(e.target.value)} />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3" >
          Email
        </Form.Label>
        <Col sm="9">
          <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3" >
          Password
        </Form.Label>
        <Col sm="9">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
    </Form>
    <Button variant="primary" onClick={(e)=>handleSave(e)}>Kaydol</Button>{' '}
    </Container>
    
  );
}

export default oldRegistration;