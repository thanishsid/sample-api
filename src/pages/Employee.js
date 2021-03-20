import { useState } from 'react';

import axios from 'axios';

import AddDetails from '../components/AddDetails';

const Employee = () => {
  const [response, setResponse] = useState('');

  const addDetails = (data) => {
    axios
      .post('link', { data })
      .then((res) => {
        res.data === 'done' && setResponse(res.data);
      })
      .catch((error) => {
        error && setResponse('failed');
      });
  };
  return (
    <div>
      {response === 'done' ? (
        <h3>Successful</h3>
      ) : response === 'failed' ? (
        <h3>Failed</h3>
      ) : (
        <AddDetails addDetails={addDetails} />
      )}
    </div>
  );
};

export default Employee;
