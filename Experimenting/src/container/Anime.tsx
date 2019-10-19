/*tslint:disable-next-line*/
import React from 'react';
import MyContext from '../context/MyContext';

interface IAnimeProps {
  title: string;
  sideMenu: any;
}

export default class Anime extends React.Component<IAnimeProps, any> {

  static contextType = MyContext;
  static title = 'Anime';

  componentDidMount = () => {
    if (this.context.title !== Anime.title) {
      this.context.toggleTitle(Anime.title);
    }
  }

  render() {
    return (
      <div>
          ANIME
      </div>
    );
  }
}
