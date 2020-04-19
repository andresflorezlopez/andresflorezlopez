import React from 'react';

import Container from '../container/Container';

import * as Tags from './SpeakOut.styled';

const SpeakOut = () => (
  <Container>
    <Tags.SpeakOutContainer>
      <Tags.SpeakOutHeader>
        <Tags.SpeakOutHeaderRegular>
          Speak out. <br />
          Be heard.
        </Tags.SpeakOutHeaderRegular>
        <Tags.SpeakOutHeaderBold>
          Be counted.
        </Tags.SpeakOutHeaderBold>
      </Tags.SpeakOutHeader>
      <Tags.SpeakOutContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus urna, viverra a tempus eget, eleifend eget quam. Donec aliquam rhoncus mauris, tincidunt vulputate erat venenatis nec.
      </Tags.SpeakOutContent>
    </Tags.SpeakOutContainer>
  </Container>
);

export default SpeakOut;