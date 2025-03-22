import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccButton() {
  return (
    <Link to="/createacc" className="create-acc-button">
      Create Account
    </Link>
  );
}

export default CreateAccButton;

