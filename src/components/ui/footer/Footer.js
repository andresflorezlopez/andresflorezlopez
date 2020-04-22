import React from "react";

import * as Tags from './Footer.styled';

import fb from '../../../assets/images/fb-square.png';
import twitter from '../../../assets/images/twitter.png';


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
          <Tags.FacebookImg alt="pope" src={fb}/>
          <Tags.TwitterImg alt="pope" src={twitter}/>
        </Tags.FooterItem>
      </Tags.FooterSocialNetworkingContainer>
    </Tags.FooterContainer>
  </Tags.Footer>
);

export default Footer;