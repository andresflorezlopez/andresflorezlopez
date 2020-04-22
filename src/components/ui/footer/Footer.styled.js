import styled from 'styled-components';
import {Container} from '../container/Container.styled';

export const Footer = styled.footer`
background: white;
`;

export const FooterContainer = styled(Container)`
background: white;
padding: 20px 0;
background-image: linear-gradient(to right,#00000061 33%,rgba(255,255,255,0) 0%);
background-position: top;
background-size: 8px 1px;
background-repeat: repeat-x;
flex-direction: row;
`;

export const FooterItemsContainer = styled.div`
display: flex;
flex-direction: row;
flex: 1;
`;

export const FooterItem = styled.div`
margin-right: 15px;
font-size: 12px;
`;

export const FooterSocialNetworkingContainer = styled.div`
display: flex;
flex-direction: row;
flex: 1;
`;