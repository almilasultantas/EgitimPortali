
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminEducation() {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
     <Container style={{marginBottom:"100px"}}>
        <h1 style={{textAlign:"left"}}>Kurs Ekle</h1>
        <Row >
          <Col sm>
            
            <Form.Group controlId="formFile" className="mb-3">
              <img alt=""src={file} style={{maxHeight:"250px", maxWidth:"250px"}}/> <br></br>
              <Form.Label>Görsel Seçiniz</Form.Label>
              <Form.Control type="file" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col sm>  
            <p>Kurs Türü:</p>
            <p >
              <p>
                <input type="radio" name="myRadio" value="option1" />
                Online
              </p> 
              <p>
                <input type="radio" name="myRadio" value="option2" />
                Video Kaydı
              </p>
              <p>
                <input type="radio" name="myRadio" value="option3" />
                Döküman
              </p>
            </p>
          </Col>
          <Col sm>
            <p>Kurs Yayınlanma Tarihi</p>
            <input type="date"/><br/>
            
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Kurs Tanıtım</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Yüklenecek kurs dökümanı seçiniz</Form.Label>
            <Form.Control type="file" onChange={handleChange}/>
          </Form.Group>
        </Row>
        <Button variant="success" href="/admindashboard">Kursu Yükle</Button>
      </Container>
  )
}

export default AdminEducation
