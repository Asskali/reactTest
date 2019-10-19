/*tslint:disable-next-line*/
import React from 'react';
import MyContext from '../context/MyContext';

interface IHomeProps {
  title: string;
  sideMenu: any;
}

class Home extends React.Component<IHomeProps, any> {

  static title = 'Home';
  static contextType = MyContext;

  componentDidMount = () => {
    if (this.context.title !== Home.title) {
      this.context.toggleTitle(Home.title);
    }
  }

  render() {
    return (
      <div>
          HOME
      </div>
    );
  }
}

export default Home;
