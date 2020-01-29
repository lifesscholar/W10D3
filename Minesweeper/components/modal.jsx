import React from "react";

class Modal extends React.Component {

  render() {
    return (
      <>
        <div className="modal-screen">
          <div className='modal-content'>
            <p>{this.props.message}</p>
            <button onClick={this.props.restartGame}>
              Play Again?
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Modal;