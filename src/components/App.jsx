import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/SearchBar';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    searchText: '',
  };
  handleSubmit = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSubmit} />
        <ImageGallery value={this.state.searchText} />
        <GlobalStyle/>
      </div>
    );
  }
}
