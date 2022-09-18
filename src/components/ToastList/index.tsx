import { forwardRef, useImperativeHandle, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Toast from '@components/ToastItem';
import { ToastService } from '@src';
import { ToastListProps } from '@types';
import { usePortal } from '@hooks';
import { defaultToastProps } from '@constants';
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
    <ToastWrapper>
      <ToastList data-test-id="toast-list" position={position}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} {...toastConfig} />
        ))}
      </ToastList>
    </ToastWrapper>,
    portal
  );
});

export default ToastListPortal;
