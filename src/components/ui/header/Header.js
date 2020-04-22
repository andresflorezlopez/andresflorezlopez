import React from "react";

import Container from '../container/Container';

import * as Tags from "./Header.styled";

const Header = () => (
  <Tags.HeaderContainer>
    <Container>
      <Tags.MenuListContainer>
        <Tags.MenuItem>
          <Tags.Link to="/">Rule of Thumb</Tags.Link>
        </Tags.MenuItem>
        <Tags.MenuItem>
          <Tags.Link to="/about">Past Trials</Tags.Link>
        </Tags.MenuItem>
        <Tags.MenuItem>
          <Tags.Link to="/skills">Past Trials copy</Tags.Link>
        </Tags.MenuItem>
        <Tags.MenuItem>
          <Tags.Link to="/contact">How It Works</Tags.Link>
        </Tags.MenuItem>
      </Tags.MenuListContainer>
    </Container>
  </Tags.HeaderContainer>
);

export default Header;