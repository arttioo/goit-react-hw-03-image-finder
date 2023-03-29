import { Component } from 'react';
import { ModalWin, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
export class Modal extends Component {
  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Overlay className="overlay" onClick={this.handleBackdropClick}>
        <ModalWin className="modal">
          <img src={largeImageURL} alt={tags} />
        </ModalWin>
      </Overlay>
    );
  }
}
Modal.propTypes={
  largeImageURL:PropTypes.string.isRequired,
  tags:PropTypes.string.isRequired,
}.isRequired