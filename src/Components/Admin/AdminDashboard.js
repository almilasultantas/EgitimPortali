import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
function AdminDashboard() {
  return (
    
    <Stack gap={3} className="col-md-5 mx-auto">
      <div className="p-2">
        <Card>
          <Card.Body>
            <Card.Title>Kurs Ekle</Card.Title>
            <Card.Text>
              Hazırlamış olduğunuz eğitim içeriklerini yüklemeye başlayın.
            </Card.Text>
            <Button variant="primary" href="/admineducation">Kurs Ekle</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="p-2">
        <Card>
          
          <Card.Body>
            <Card.Title>Öğrenci Takip</Card.Title>
            <Card.Text>
              Eğitiminize kaydolan öğrencilerin ilerlemelerini kontrol edin.
            </Card.Text>
            <Button variant="primary" href="/customerlist">Öğrenci Kontrol</Button>
          </Card.Body>
        </Card>
      </div>
  </Stack>
  )
}

export default AdminDashboard
