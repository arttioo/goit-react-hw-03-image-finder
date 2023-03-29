import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { FetchImage } from './FetchImage';
import { List } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    pictures: [],
    loading: false,
    error: null,
    page: 1,

    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, error: null, totalHits: 0 });
      FetchImage(this.props.value.trim(), this.state.page)
        .then(res => {
          return res.json();
        })
        .then(pictures => {
          if (!!pictures.totalHits) {
            this.setState({
              pictures:
                prevState.page !== this.state.page
                  ? [...this.state.pictures, ...pictures.hits]
                  : pictures.hits,
              totalHits: pictures.totalHits,
            });
          } else {
            return Promise.reject(new Error(`error`));
          }
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    const { pictures, loading, error } = this.state;
    return (
      <>
        <List className="gallery">
          {loading && <Loader />}
          {pictures &&
            pictures.map(picture => (
              <ImageGalleryItem key={picture.id} {...picture} />
            ))}
        </List>
        {error && <h1>{error.message}</h1>}
        {pictures.length * this.state.page < this.state.totalHits && (
          <Button onClick={this.handleLoad} />
        )}
      </>
    );
  }
}
ImageGallery.propType = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
}.isRequired;
