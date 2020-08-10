import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Aspect from '@components/atoms/Aspect';
import { Wrapper } from './style';
import { useCallback } from 'react';

const Terminal = () => {
  const { t } = useTranslation('terminal');
  const terminal = useRef(null);

  const clear = () => {
    if (terminal) terminal.current.innerHTML = '';
  }

  const pause = (s = 1) => new Promise(resolve => setTimeout(resolve, 1000 * Number(s)));

  const type = useCallback(async (text, inline, container = terminal.current) => {
    if (!container) return;
    await pause(1);

    const queue = text.split('');
    const newContainer = container;

    while (queue.length) {
      const char = queue.shift();
      newContainer.innerHTML += char;
      await pause(0.045);
    }

    if (inline) newContainer.innerHTML += ' ';
    else newContainer.innerHTML += '<br/>';

    await pause(0.5);
    newContainer.classList.remove('active');
  }, [terminal]);

  const boot = useCallback(async () => {
    clear();
    await type(t('about'));
    await type(t('feedback'), true);
    await type(t('help'));
  }, [type, t]);

  useEffect(() => {
    boot();
  }, [boot]);

  return (
    <Wrapper>
      <Aspect />
      <div ref={terminal} />
    </Wrapper>
  );
};

export default Terminal;
