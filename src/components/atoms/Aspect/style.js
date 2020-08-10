import styled, { keyframes } from 'styled-components';

export const Scanline = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
      to bottom,
      rgba(255,255,255,0),
      rgba(255,255,255,0) 50%,
      rgba(0,0,0,.2) 70%,
      rgba(0,0,0,.6)
  );
  background-size: 100% .3rem;
  position: fixed;
  pointer-events: none;

  &:before {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 1px;
    background: #fff;
    background: linear-gradient(to bottom,
      rgba(255,0,0,0) 0%,
      rgba(255,250,250,1) 50%,
      rgba(255,255,255,0.98) 51%,
      rgba(255,0,0,0) 100%
    );
    opacity: .1;
  }

  &:after {
    box-shadow: 0 2px 6px rgba(25,25,25,0.2),
      inset 0 1px rgba(50,50,50,0.1),
      inset 0 3px rgba(50,50,50,0.05),
      inset 0 3px 8px rgba(64,64,64,0.05),
      inset 0 -5px 10px rgba(25,25,25,0.1);
  }
`

const flicker = keyframes`
  0% {
    opacity: 0.552;
  }
  5% {
    opacity: 0.48287;
  }
  10% {
    opacity: 0.59134;
  }
  15.0% {
    opacity: 0.79543;
  }
  20% {
    opacity: 0.75134;
  }
  25% {
    opacity: 0.1956;
  }
  30.0% {
    opacity: 0.90687;
  }
  35% {
    opacity: 0.122;
  }
  40% {
    opacity: 0.62254;
  }
  45% {
    opacity: 0.56977;
  }
  50% {
    opacity: 0.9925;
  }
  55.0% {
    opacity: 0.55487;
  }
  60.0% {
    opacity: 0.16607;
  }
  65% {
    opacity: 0.12353;
  }
  70% {
    opacity: 0.2214;
  }
  75% {
    opacity: 0.67908;
  }
  80% {
    opacity: 0.97163;
  }
  85.0% {
    opacity: 0.1275;
  }
  90% {
    opacity: 0.37186;
  }
  95% {
    opacity: 0.24475;
  }
  100% {
    opacity: 0.37221;
  }
`;

export const Flicker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.008);
  opacity: 0;
  z-index: 1000;
  pointer-events: none;
  animation: ${flicker} 0.12s infinite;
`;
