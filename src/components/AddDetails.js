import { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

const AddDetails = ({ addDetails }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addDetails({ name, contact, address });

    setName('');
    setContact('');
    setAddress('');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: '70%', margin: '4em auto', textAlign: 'center' }}
    >
      <Form.Group controlId='formName'>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formContact'>
        <Form.Label>Contact No</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Contact No'
          onChange={(event) => setContact(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formAddress'>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Address'
          onChange={(event) => setAddress(event.target.value)}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default AddDetails;
