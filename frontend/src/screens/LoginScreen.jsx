import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        {/* email */}
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* password */}
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* submit button */}
        <Button type='submit' variant='primary' className='mt-3'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New customer? <Link to={`/register`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
