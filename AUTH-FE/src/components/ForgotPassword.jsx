import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';

function ForgotPassword() {  

  const handleCode = (e) => {
      try {
        e.preventDefault()
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      console.log(formProps);
      } catch (error) {
        console.log(error);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      const formData = new FormData(e.target)
      const formProps = Object.fromEntries(formData)
      console.log(formProps);
  }

  return <>
    <Card style={{ width: '90%',margin : "auto",marginTop:"10%" }}>
      <Card.Body>
        <Card.Title className='text-center'>Forgot Password</Card.Title>
        <Form onSubmit={handleCode}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email'/>
          </Form.Group>
          <Button variant="primary" type="submit">Send Code</Button>      
        </Form>
        <Form onSubmit={handleSubmit} className='mt-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter code from email</Form.Label>
            <Form.Control type="text" placeholder="Enter code" name="random String" />
          </Form.Group>

          <Button variant="success" type="submit">Submit</Button>      
        </Form>
      </Card.Body>
    </Card>

  </>
}

export default ForgotPassword