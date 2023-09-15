import PropTypes from 'prop-types';
import React, { useState } from 'react';
import url from '../../images/icons8-search-50.png';

import {
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledImg,
} from './Searchbar.styled';

const Searchbar = ({ onInputQuery }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    const queryValue = e.target.value;
    setQuery(queryValue);
  };

  const onSubmit = e => {
    e.preventDefault();

    onInputQuery(query);
    e.currentTarget.reset();
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={onSubmit}>
        <StyledButton type="submit">
          <StyledImg src={url} alt="Search" />
        </StyledButton>

        <StyledInput
          type="text"
          name="Search"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
        />
      </StyledForm>
    </StyledHeader>
  );
};

Searchbar.propTypes = { onInputQuery: PropTypes.func.isRequired };

export default Searchbar;
