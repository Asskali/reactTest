/*tslint:disable-next-line*/
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Icon, Menu } from 'semantic-ui-react';
import MyContext from '../context/MyContext';

interface IHead extends RouteComponentProps{
  title: string;
  sideMenu: any;
}

class Head extends React.Component<IHead, any> {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <Menu className="adam-menu">
          <Menu.Item onClick={this.props.sideMenu}>
            <Icon name="bars" color="red"/>
          </Menu.Item>
          <Menu.Item header className="adam-header">
            {this.context.title}
          </Menu.Item>
          <Menu.Item header className="adam-header-right">
            {this.currentIcon()}
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  currentIcon = () => {
    switch (this.props.location.pathname) {
      case '/games': {
        return  <Icon name="gamepad" color="red"/>;
      }
      case '/tvseries': {
        return  <Icon name="tv" color="red"/>;
      }
      case '/anime': {
        return  <Icon name="gripfire" color="red"/>;
      }
      case '/films': {
        return  <Icon name="film" color="red"/>;
      }
      default: {
        return  <Icon name="home" color="red"/>;
      }
    }
  }
}

export default withRouter(Head);
