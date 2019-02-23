/*tslint:disable-next-line*/
import React from 'react';
import { GridRow, Header, Menu, Icon } from 'semantic-ui-react';

interface IHead {
  title: string;
  sideMenu: any;
}

export default class Head extends React.Component<IHead, any> {

  render() {
    return (
      <div>
        <Menu className="adam-menu">
          <Menu.Item onClick={this.props.sideMenu}>
            <Icon name="bars" color="red"/>
          </Menu.Item>
          <Menu.Item header className="adam-header">
            Adam's site
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
