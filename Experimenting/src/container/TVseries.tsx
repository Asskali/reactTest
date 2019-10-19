/*tslint:disable-next-line*/
import React from 'react';
import MyContext from '../context/MyContext';

interface ITVseriesProps {
  title: string;
  sideMenu: any;
}

export default class TVseries extends React.Component<ITVseriesProps, any> {

  static contextType = MyContext;
  static title = 'TV-Series';

  componentDidMount = () => {
    if (this.context.title !== TVseries.title) {
      this.context.toggleTitle(TVseries.title);
    }
  }

  render() {
    return (
      <div>
          TV-SERIES
      </div>
    );
  }
}
