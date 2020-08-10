import { createGlobalStyle } from 'styled-components';

const RobotoBlackItalicWoff2 = '/static/fonts/text/Roboto-BlackItalic.woff2';
const RobotoBlackItalicWoff = '/static/fonts/text/Roboto-BlackItalic.woff';

const RobotoThinWoff2 = '/static/fonts/text/Roboto-Thin.woff2';
const RobotoThinWoff = '/static/fonts/text/Roboto-Thin.woff';

const RobotoBoldWoff2 = '/static/fonts/text/Roboto-Bold.woff2';
const RobotoBoldWoff = '/static/fonts/text/Roboto-Bold.woff';

const RobotoItalicWoff2 = '/static/fonts/text/Roboto-Italic.woff2';
const RobotoItalicWoff = '/static/fonts/text/Roboto-Italic.woff';

const RobotoThinItalicWoff2 = '/static/fonts/text/Roboto-ThinItalic.woff2';
const RobotoThinItalicWoff = '/static/fonts/text/Roboto-ThinItalic.woff';

const RobotoRegularWoff2 = '/static/fonts/text/Roboto-Regular.woff2';
const RobotoRegularWoff = '/static/fonts/text/Roboto-Regular.woff';

const RobotoLightItalicWoff2 = '/static/fonts/text/Roboto-LightItalic.woff2';
const RobotoLightItalicWoff = '/static/fonts/text/Roboto-LightItalic.woff';

const RobotoLightWoff2 = '/static/fonts/text/Roboto-Light.woff2';
const RobotoLightWoff = '/static/fonts/text/Roboto-Light.woff';

const RobotoBlackWoff2 = '/static/fonts/text/Roboto-Black.woff2';
const RobotoBlackWoff = '/static/fonts/text/Roboto-Black.woff';

const RobotoMediumWoff2 = '/static/fonts/text/Roboto-Medium.woff2';
const RobotoMediumWoff = '/static/fonts/text/Roboto-Medium.woff';

const RobotoBoldItalicWoff2 = '/static/fonts/text/Roboto-BoldItalic.woff2';
const RobotoBoldItalicWoff = '/static/fonts/text/Roboto-BoldItalic.woff';

const RobotoMediumItalicWoff2 = '/static/fonts/text/Roboto-MediumItalic.woff2';
const RobotoMediumItalicWoff = '/static/fonts/text/Roboto-MediumItalic.woff';

const fonts = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBlackItalicWoff2}) format('woff2'), url(${RobotoBlackItalicWoff}) format('woff');
  font-weight: 900;
  font-style: italic;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoThinWoff2}) format('woff2'), url(${RobotoThinWoff}) format('woff');
  font-weight: 100;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldWoff2}) format('woff2'), url(${RobotoBoldWoff}) format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoItalicWoff2}) format('woff2'), url(${RobotoItalicWoff}) format('woff');
  font-weight: 400;
  font-style: italic;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoThinItalicWoff2}) format('woff2'), url(${RobotoThinItalicWoff}) format('woff');
  font-weight: 100;
  font-style: italic;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegularWoff2}) format('woff2'), url(${RobotoRegularWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLightItalicWoff2}) format('woff2'), url(${RobotoLightItalicWoff}) format('woff');
  font-weight: 300;
  font-style: italic;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLightWoff2}) format('woff2'), url(${RobotoLightWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBlackWoff2}) format('woff2'), url(${RobotoBlackWoff}) format('woff');
  font-weight: 900;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMediumWoff2}) format('woff2'), url(${RobotoMediumWoff}) format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldItalicWoff2}) format('woff2'), url(${RobotoBoldItalicWoff}) format('woff');
  font-weight: 600;
  font-style: italic;
  font-display: fallback;
}
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMediumItalicWoff2}) format('woff2'),
  url(${RobotoMediumItalicWoff}) format('woff');
  font-weight: 500;
  font-style: italic;
  font-display: fallback;
}
`;

export default fonts;
