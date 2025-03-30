import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components';

const TypewriterStyled = styled.div`
  .Typewriter__wrapper {
    font-size: 2.2em !important;
    color: #be6adf !important;
    font-weight: 600 !important;
  }
  .Typewriter__cursor {
    font-size: 2.4em !important;
    color: #b562d6 !important;
  }
`;

function Type() {
  return (
    <TypewriterStyled>
      <Typewriter
        words={['Developpeur Full stack', 'Freelancer', 'Developpeur MERN Stack', "A la recherche d'alternance"]}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </TypewriterStyled>
  );
}

export default Type;