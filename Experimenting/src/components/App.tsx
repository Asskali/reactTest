/*tslint:disable-next-line*/
import React from 'react';
import { Button, Container, Icon, Menu, Sidebar } from 'semantic-ui-react';
import Head from '../container/Head';

interface IAppProps {
  message?: string;
}

interface IAppState {
  showSideBar: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {

  public state = {
    showSideBar: true,
  };

  render() {
    return (
      <Container textAlign="center">
        <Head title={this.props.message} sideMenu={this.handleSidebarToggle}></Head>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={this.state.showSideBar}
          width="thin"
        >
          <Menu.Item as="home">
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
        </Sidebar>
        <Button onClick={this.handleSidebarToggle}
          className="adam-knapp" type="primary" content="Legg til spill" />
      </Container>
    );
  }

  handleSidebarToggle = () => {
    console.dir(this.state.showSideBar);
    this.setState({ showSideBar: !this.state.showSideBar });
  }
}
