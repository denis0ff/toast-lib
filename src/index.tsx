import { useLayoutEffect, useRef } from 'react';

import { ToastSingleton } from '@utils';
import { RefFunctions, ToastConfig } from '@types';
import ToastList from '@components/ToastList';

export const ToastService = new ToastSingleton();

export const ToastProvider = (config: ToastConfig) => {
  const toastRef = useRef<RefFunctions>();
  useLayoutEffect(() => {
    ToastService.initialize(toastRef.current);
  }, []);

  return <ToastList ref={toastRef} toastConfig={config} />;
};
