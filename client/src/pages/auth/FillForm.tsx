import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from '../../components/ui/Card';
  import InputField from '../../components/shared/InputField';

function URLDataInput() {
  const [url, setUrl] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const redirectToUrl = () => {
    window.location.href = 'forms/' + url;
  };

  return (
    <div>
     
      <Card>
        <CardHeader>
          <CardTitle>Fill Form</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
        {/* <h1>Enter Code</h1>
        <input 
        type="text" 
        value={url} 
        onChange={handleInputChange} 
        placeholder="Enter Code"
      /> */}
      <InputField
            label="Email"
            type="email"
            placeholder="test@mail.com"
            className="text-slate-600"
            required
          />
      <InputField
      label='Enter Code'
            type="text"
            placeholder="Enter Code"
            value={url} 
            onChange={handleInputChange} 
          />
      {/* <button onClick={redirectToUrl}>Start</button> */}
      <Button
            onClick={redirectToUrl}
          >
            Start
          </Button>
                
            
        </CardContent>
      </Card>
      
    </div>
  );
}

export default URLDataInput;