/*tslint:disable-next-line*/
import React from 'react';
import GameTable from '../components/GameTable';
import MyContext from '../context/MyContext';
import { GameGenre } from '../enum/enum';

interface IGamesProps {
  title: string;
  sideMenu: any;
}

export default class Games extends React.Component<IGamesProps, any> {

  static contextType = MyContext;
  static title = 'Games';

  componentDidMount = () => {
    if (this.context.title !== Games.title) {
      this.context.toggleTitle(Games.title);
    }
  }

  render() {
    const gamesList = [{ title: 'Horizon Zero Dawn', genre: GameGenre.ActionRPG, rating: 5 }];

    return (
        <>
          <GameTable games={gamesList} />
        </>
    );
  }
}
