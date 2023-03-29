import { Component } from 'react';
import { Button, Input } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
