import PropTypes from 'prop-types';
import React, { Component } from 'react';
import url from '../../images/icons8-search-50.png';

import {
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledImg,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  static propTypes = { onInputQuery: PropTypes.func.isRequired };

  onInputChange = e => {
    const query = e.target.value;
    this.setState({
      query: query,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onInputQuery(this.state.query);
    e.currentTarget.reset();
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.onSubmit}>
          <StyledButton type="submit">
            <StyledImg src={url} alt="Search" />
          </StyledButton>

          <StyledInput
            type="text"
            name="Search"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}
