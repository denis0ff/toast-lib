import { v4 } from 'uuid';
import { defaultToastProps } from '@constants';
import { CreateToastProps, RefFunctions, Toast } from '@types';

export class ToastSingleton {
  toasts: Toast[] = [];
  toastRef: RefFunctions | undefined;

  initialize = (ref: RefFunctions | undefined) => {
    this.toastRef = ref;
  };

  getToasts = () => {
    return this.toasts.slice(-3).reverse();
  };

  addToast = (toast: Toast) => {
    this.toasts.push(toast);
    this.toastRef?.rerender();
  };

  removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    this.toastRef?.rerender();
  };

  setTimer = (id: string, duration: number) => {
    const timer = setTimeout(() => {
      this.removeToast(id);
    }, duration);
    return timer;
  };

  createToast = (props: CreateToastProps) => {
    const newToast: Toast = {
      ...defaultToastProps,
      ...props,
      id: v4(),
      removeToast: (id) => this.removeToast(id),
      setTimer: (id, time) => this.setTimer(id, time),
    };
    this.addToast(newToast);

    return newToast;
  };
}
