/*tslint:disable-next-line*/
import React from 'react';
import { Container } from 'semantic-ui-react';
import AdamSidebar from '../container/AdamSidebar';
import Head from '../container/Head';
// tslint:disable-next-line:import-name
import MyContext from '../context/MyContext';
import Main from '../router/Main';

interface IAppProps {
  message?: string;
}

interface IAppState {
  showSideBar: boolean;
  title: string;
}

export default class App extends React.Component<IAppProps, IAppState> {

  public state = {
    showSideBar: true,
    title: "Adam's site",
  };

  toggleTitle = (newTheme: string) => {
    this.setState({ title: newTheme });
  }

  static contextType = MyContext;

  render() {
    return (
      <div>
        <Container textAlign="center">
          <MyContext.Provider value={{ title: this.state.title, toggleTitle: this.toggleTitle }}>
            <Head title={this.props.message} sideMenu={this.handleSidebarToggle}></Head>
            <AdamSidebar showSideBar={this.state.showSideBar} />
            <Main />
          </MyContext.Provider>
        </Container>
      </div>
    );
  }

  handleSidebarToggle = () => {
    this.setState({ showSideBar: !this.state.showSideBar });
  }
}
