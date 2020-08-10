import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { White } from './colors';

const base = createGlobalStyle`
body {
  ${Paragraph}
  color: ${White};

  .page {
    width: 100vw;
    height: 100vh;
  }
}
`;

export default base;
