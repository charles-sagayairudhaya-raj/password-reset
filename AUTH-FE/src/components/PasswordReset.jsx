import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function PasswordReset() {

    const handlePassword = () => {
        console.log("clicked");
    }

    return <>
        <Card style={{ width: '90%',margin : "auto",marginTop:"10%" }}>
          <Card.Body>
            <Card.Title className='text-center'>Reset Password</Card.Title>
            <Form onSubmit={handlePassword}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter new password</Form.Label>
                <Form.Control type="text" placeholder="Enter password" name='text'/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Enter Confirm password" name='password'/>
              </Form.Group>
              <Button variant="primary" type="submit">Update Password</Button>      
            </Form>
          </Card.Body>
        </Card>
    </>
}

export default PasswordReset