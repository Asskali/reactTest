/*tslint:disable-next-line*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import AdamSidebar from '../container/AdamSidebar';
import Head from '../container/Head';
import Home from '../container/Home';
import Main from '../router/Main';

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
      <div>
        <Container textAlign="center">
          <Head title={this.props.message} sideMenu={this.handleSidebarToggle}></Head>
          <AdamSidebar showSideBar={this.state.showSideBar} />
          <Button onClick={this.handleSidebarToggle}
            className="adam-knapp" type="primary" content="Legg til spill" />
          <Main />
        </Container>
      </div>
    );
  }

  handleSidebarToggle = () => {
    console.dir(this.state.showSideBar);
    this.setState({ showSideBar: !this.state.showSideBar });
  }
}
