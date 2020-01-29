import React from 'react';
import Tile from "./tile";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // debugger
    const board = this.props.board.grid.map ((rows, rowIdx) => {

      const row = rows.map((tile, tileIdx) => {
        return (
          <Tile 
            tile={tile} 
            updateGame={this.props.updateGame} 
            key={rowIdx + "-" + tileIdx}/>
        )
      });

      return (<div className="row" key={rowIdx}>
        {row}
      </div>)

    });
    
    return (
      <div>
        {board}
      </div>
    )
  }
}

export default Board;