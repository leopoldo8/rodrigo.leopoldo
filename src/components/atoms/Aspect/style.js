import styled, { keyframes } from 'styled-components';

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
  background: rgba(18, 16, 16, 0.2);
  opacity: 0;
  z-index: 1000;
  pointer-events: none;
  animation: ${flicker} 0.12s infinite;
`;
