/*tslint:disable-next-line*/
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Films(props: any) {
  const title = useContext(MyContext);

  if (title.title !== 'Films') {
    title.toggleTitle('Films');
  }

  return (
    <div>
        FILMS hooks!
    </div>
  );
}
