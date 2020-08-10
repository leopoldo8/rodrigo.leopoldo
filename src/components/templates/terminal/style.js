import styled from 'styled-components';
import { Black, Secondary } from '@assets/styles/colors';

export const Wrapper = styled.div`
  background: ${Black};
  background-image: radial-gradient(#414141c2, black 120%);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 20px;

  p {
    text-indent: 18px;
    padding: 5px 0;
  }

  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(0deg, ${Secondary}, ${Secondary} 1px, transparent 1px, transparent 2px);
  }

  ::selection {
    background: #0080FF;
    text-shadow: none;
  }
`;
