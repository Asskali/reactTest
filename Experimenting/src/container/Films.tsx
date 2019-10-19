/*tslint:disable-next-line*/
import React from 'react';
import MyContext from '../context/MyContext';

interface IFilmsProps {
  title: string;
  sideMenu: any;
}

export default class Films extends React.Component<IFilmsProps, any> {

  static contextType = MyContext;
  static title = 'Films';

  componentDidMount = () => {
    if (this.context.title !== Films.title) {
      this.context.toggleTitle(Films.title);
    }
  }
  render() {
    return (
      <div>
          FILMS
      </div>
    );
  }
}
