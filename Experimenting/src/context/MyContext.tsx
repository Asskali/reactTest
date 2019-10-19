/*tslint:disable-next-line*/
import React from 'react';

const context = {
  title: 'default',
  toggleTitle: (newTitle: string) => {},
};

const MyContext = React.createContext(context);

export default MyContext;
