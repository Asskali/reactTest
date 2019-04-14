/*tslint:disable-next-line*/
import React from 'react';
import GameTable from '../components/GameTable';
import { GameGenre } from '../enum/enum';

interface IGamesProps {
  title: string;
  sideMenu: any;
}

export default class Games extends React.Component<IGamesProps, any> {

  render() {
    const gamesList = [{ title: 'Horizon Zero Dawn', genre: GameGenre.ActionRPG, rating: 5 }];

    return (
        <>
          <GameTable games={gamesList} />
        </>
    );
  }
}
