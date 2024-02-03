// import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    // const history = useHistory();
     const navigate = useNavigate();
    navigate('/');
    


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Application</h1>
      <p className="text-lg text-center mb-6">
       please give your Choice
      </p>
      <div className="flex flex-col gap-4">
        <Link to="/">
          <Button className="w-full">Create Form </Button>
        </Link>
        <Link to="/fill">
          <Button className="w-full">Fill Form</Button>
        </Link>
      </div>
    </div>
  );
}