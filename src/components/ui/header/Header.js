import React from "react";
import { Link } from "react-router-dom";

import * as Tags from "./Header.styled";

const Header = () => (
  <div>
    <Tags.MenuListContainer>
      <Tags.MenuItem>
        <Link to="/">Work.</Link>
      </Tags.MenuItem>
      <Tags.MenuItem>
        <Link to="/about">About.</Link>
      </Tags.MenuItem>
      <Tags.MenuItem>
        <Link to="/skills">Skills.</Link>
      </Tags.MenuItem>
      <Tags.MenuItem>
        <Link to="/contact">Contact.</Link>
      </Tags.MenuItem>
    </Tags.MenuListContainer>
  </div>
);

export default Header;