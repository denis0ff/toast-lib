import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from '@components/ErrorBoundary';
import Toast from '@components/ToastItem';
import { ToastService } from '@src';
import { ToastListProps } from '@types';
import { usePortal } from '@hooks';
import { GlobalStyle } from '@theme';

const ToastList = forwardRef(({ rootElement, toastConfig }: ToastListProps, ref) => {
  const portal = usePortal(rootElement);
  const [_, setToasts] = useState([]);

  useImperativeHandle(ref, () => ({
    rerender: () => setToasts([]),
  }));

  const toasts = ToastService.getToasts();

  return ReactDOM.createPortal(
    <ErrorBoundary>
      <ul>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} {...toastConfig} />
        ))}
      </ul>
      <GlobalStyle />
    </ErrorBoundary>,
    portal
  );
});

export default ToastList;
