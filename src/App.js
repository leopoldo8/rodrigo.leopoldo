import React, { Suspense } from 'react';
import Router from './router';
import { I18nextProvider } from 'react-i18next';
import GlobalStyles from '@modules/globalStyles';
import i18n from './i18n';

const Personal = () => {
  return (
    <Suspense fallback="loading">
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </Suspense>
  );
};

export default Personal;
