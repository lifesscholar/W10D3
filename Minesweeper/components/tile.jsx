import React from "react";


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    
  }

  // altPressed () {
  //   return 
  // }


  handleClick(e) {
    e.preventDefault();
    if (e.type === 'contextmenu') {
      this.props.updateGame(this.props.tile, true);
    } else {
      this.props.updateGame(this.props.tile, false);
    }
  }

  render () {
    
    const status = () => {
      if (this.props.tile.flagged) {
        return '🚩';
      } else if (this.props.tile.explored && this.props.tile.bombed) {
        return 'w';
      } else if (this.props.tile.explored) {
        if (this.props.tile.adjacentBombCount() === 0) {
          return "";
        }
        else {
          return this.props.tile.adjacentBombCount();
        }
      } else {
        return ''; //'\u{2B1C}'; 
      }
    };
    const explored = this.props.tile.explored ? 'tile explored' : 'tile';
    return (
      <>
        <div onClick={this.handleClick} onContextMenu={this.handleClick} className={explored}>
          {status()}
        </div>
      </>
    )
  }
}


export default Tile;