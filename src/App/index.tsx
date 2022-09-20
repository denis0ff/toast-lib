import { useLayoutEffect, useRef } from 'react';
import { RefFunctions, ToastConfig } from '@types';
import ToastList from '@components/ToastList';
import { ToastService } from '@utils';

export const ToastProvider = (config: ToastConfig) => {
  const toastRef = useRef<RefFunctions>();
  useLayoutEffect(() => {
    ToastService.initialize(toastRef.current);
  }, []);

  return <ToastList ref={toastRef} toastConfig={config} />;
};
