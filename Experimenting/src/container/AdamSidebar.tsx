/*tslint:disable-next-line*/
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

interface ISidebarProps extends RouteComponentProps<any>{
  showSideBar: boolean;
  history: any;
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
          <Menu.Item as="games" onClick={this.gamesButton}>
            <Icon name="gamepad" color="red" />
            Games
          </Menu.Item>
          <Menu.Item as="anime" onClick={this.animeButton}>
            <Icon name="gripfire" color="red"/>
            Anime
          </Menu.Item>
          <Menu.Item as="tvseries" onClick={this.tvSeriesButton}>
            <Icon name="tv" color="red"/>
            TV-series
          </Menu.Item>
          <Menu.Item as="film" onClick={this.filmsButton}>
            <Icon name="film" color="red"/>
            Film
          </Menu.Item>
        </Sidebar>
    );
  }

  homeButton = () => {
    this.props.history.push('/');
  }

  gamesButton = () => {
    this.props.history.push('/games');
  }

  tvSeriesButton = () => {
    this.props.history.push('/tvseries');
  }

  animeButton = () => {
    this.props.history.push('/anime');
  }

  filmsButton = () => {
    this.props.history.push('/films');
  }
}

export default withRouter(AdamSidebar);
