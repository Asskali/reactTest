/*tslint:disable-next-line*/
import React from 'react';
import { Button } from 'semantic-ui-react';

interface AppProps {
  message?: string;
}

export default function ({ message }: AppProps) {
  return (
    <div className="container">
      <h1>Hello {message}</h1>
      <Button className="adam-knapp" type="primary" content="Legg til spill" />
    </div>
  );
}
