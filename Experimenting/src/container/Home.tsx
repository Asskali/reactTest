/*tslint:disable-next-line*/
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface IHomeProps extends RouteComponentProps<any>{
  title: string;
  sideMenu: any;
}

class Home extends React.Component<IHomeProps, any> {

  render() {
    return (
      <div>
          {console.dir('TEST HOME')}
          TEST
      </div>
    );
  }
}

export default withRouter(Home);
