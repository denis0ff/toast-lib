import { v4 } from 'uuid';
import { defaultToastProps, NOTIFICATION_COUNT } from '@constants';
import { CreateToastProps, RefFunctions, Toast } from '@types';

export class ToastSingleton {
  toasts: Toast[] = [];
  toastRef: RefFunctions | undefined;

  initialize = (ref: RefFunctions | undefined) => {
    this.toastRef = ref;
  };

  getToasts = () => {
    return this.toasts.slice(-NOTIFICATION_COUNT);
  };

  addToast = (toast: Toast) => {
    this.toasts.push(toast);
    this.toastRef?.rerender();
  };

  removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    this.toastRef?.rerender();
  };

  createToast = (props: CreateToastProps) => {
    const newToast: Toast = {
      ...defaultToastProps,
      ...props,
      id: v4(),
      removeToast: (id) => this.removeToast(id),
    };
    this.addToast(newToast);

    return newToast;
  };
}
