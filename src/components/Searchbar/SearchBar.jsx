import { Component } from 'react';
import { Button, Input, Form } from './SearchBar.styled';
import PropTypes from 'prop-types';

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
        <Form onSubmit={this.handleSubmit} className="form">
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>
        </Form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
