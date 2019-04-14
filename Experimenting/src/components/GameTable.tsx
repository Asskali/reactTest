/*tslint:disable-next-line*/
import React from 'react';
import { Rating, Table } from 'semantic-ui-react';
import { IGame } from '../interfaces/game';

interface IGameTableProps {
  games: IGame[];
}

export default class GameTable extends React.Component<IGameTableProps, any> {

  render() {
    return (
      <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
                {
                    this.props.games.map(game => (
                    <>
                        <Table.Row>
                            <Table.Cell>{game.title}</Table.Cell>
                            <Table.Cell>{game.genre}</Table.Cell>
                            <Table.Cell>
                                <Rating icon="star" defaultRating={game.rating} maxRating={5} />
                            </Table.Cell>
                        </Table.Row>
                    </>))
                }
          </Table.Body>
      </Table>
    );
  }
}
