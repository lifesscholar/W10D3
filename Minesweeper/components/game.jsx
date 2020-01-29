import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from './board';
import Modal from "./modal";


class Game extends React.Component {

  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(10, 10);
    this.state = { board: board };
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board });
  }

  restartGame () {
    const newBoard = new Minesweeper.Board(10, 10);
    this.setState( { board: newBoard } );
  }

  render() {
    
    let message = "";

      if (this.state.board.lost()) {
        message = "you lost ):";
      } else if (this.state.board.won()) {
        message = 'you won!';
      }
      let modal = "";

      if (message.length > 0) {
        modal = <Modal message={message} restartGame={this.restartGame} />
      }
    

    return (
      <>
        <h1>This is the Game</h1>
        <div className='modal' >{modal}</div>
        <Board updateGame={this.updateGame} board={this.state.board}/>
      </>
    );
  }
}

export default Game;