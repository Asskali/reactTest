/*tslint:disable-next-line*/
import React from 'react';
import { Link, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

interface ISidebarProps extends RouteComponentProps<any>{
  showSideBar: boolean;
}

class AdamSidebar extends React.Component<ISidebarProps> {

  render() {
    return (
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={this.props.showSideBar}
          width="thin"
        >
          <Menu.Item as="home" onClick={this.homeButton}>
            <Icon name="home" color="red"/>
            Home
          </Menu.Item>
          <Menu.Item as="games">
            <Icon name="gamepad" color="red" />
            Games
          </Menu.Item>
          <Menu.Item as="anime">
            <Icon name="gripfire" color="red"/>
            Anime
          </Menu.Item>
          <Menu.Item as="tvseries">
            <Icon name="tv" color="red"/>
            TV-series
          </Menu.Item>
          <Menu.Item as="film">
            <Icon name="film" color="red"/>
            Film
          </Menu.Item>
          <Link to="/home">Test</Link>
        </Sidebar>
    );
  }

  homeButton = () => {
    this.props.history.push('/home');
  }
}

export default withRouter<ISidebarProps>(AdamSidebar);
