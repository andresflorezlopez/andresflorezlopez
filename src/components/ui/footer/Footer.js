import React from "react";

import * as Tags from './Footer.styled';

const Footer = () => (
  <Tags.Footer>
    <Tags.FooterContainer>
      <Tags.FooterItemsContainer>
        <Tags.FooterItem>
          Terms and Conditions
        </Tags.FooterItem>
        <Tags.FooterItem>
          Politics
        </Tags.FooterItem>
        <Tags.FooterItem>
          Contact us
        </Tags.FooterItem>
      </Tags.FooterItemsContainer>
      <Tags.FooterSocialNetworkingContainer>
        <Tags.FooterItem>
          Follow us: 
        </Tags.FooterItem>
      </Tags.FooterSocialNetworkingContainer>
    </Tags.FooterContainer>
  </Tags.Footer>
);

export default Footer;