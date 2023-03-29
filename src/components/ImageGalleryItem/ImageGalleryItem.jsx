import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    return (
      <>
        <Item key={id} className="gallery-item">
          <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </Item>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
