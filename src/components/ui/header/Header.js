import React from "react";

import Container from '../container/Container';

import * as Tags from "./Header.styled";

const Header = () => (
  <Tags.HeaderMainContainer>
    <Tags.HeaderContainer>
      <Tags.Logo>
        <Tags.Link to="/">Rule of Thumb</Tags.Link>
      </Tags.Logo>
      <Tags.MenuListContainer>
        <Tags.MenuItem>
          <Tags.Link to="/about">Past Trials</Tags.Link>
        </Tags.MenuItem>
        <Tags.MenuItem>
          <Tags.Link to="/skills">Hor it works</Tags.Link>
        </Tags.MenuItem>
        <Tags.MenuItem>
          <Tags.Link to="/contact">Login/Sing up</Tags.Link>
        </Tags.MenuItem>
      </Tags.MenuListContainer>
    </Tags.HeaderContainer>
  </Tags.HeaderMainContainer>
);

export default Header;