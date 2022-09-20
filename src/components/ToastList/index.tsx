import { forwardRef, useImperativeHandle, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { defaultToastProps } from '@constants';
import { usePortal } from '@hooks';
import { ToastService } from '@utils';
import { ToastListProps } from '@types';
import { GlobalStyle, theme } from '@theme';
import Toast from '@components/ToastItem';
import ErrorBoundary from '@components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { ToastList, ToastWrapper } from './styled';

const ToastListPortal = forwardRef(({ rootElement, toastConfig }: ToastListProps, ref) => {
  const portal = usePortal(rootElement);
  const [, forceUpdate] = useReducer(() => ({}), {});

  useImperativeHandle(ref, () => ({
    rerender: forceUpdate,
  }));

  const toasts = ToastService.getToasts();
  const position = toastConfig.position ?? defaultToastProps.position;

  return ReactDOM.createPortal(
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <ToastWrapper>
          <ToastList data-test-id="toast-list" position={position}>
            {toasts.map((toast) => (
              <Toast key={toast.id} {...toast} {...toastConfig} />
            ))}
          </ToastList>
        </ToastWrapper>
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>,
    portal
  );
});

export default ToastListPortal;
