import { ToastConfig } from '@types';

export const positions = {
  'top-left': 'top: 10px; left: 10px;',
  'top-center': 'top: 10px; left 50%; transform: translateX(-50%);',
  'top-right': 'top: 10px; right: 10px;',
  'bottom-left': 'left 10px; bottom: 10px;',
  'bottom-right': 'right: 10px; bottom: 10px;',
  'bottom-center': 'left: 50%; bottom: 10px; transform: translateX(-50%);',
};

export const defaultToastProps: Required<ToastConfig> = {
  position: 'bottom-left',
  spacing: 16,
  color: '',
  animation: 'slide',
  variant: 'info',
  title: '',
  duration: 0,
};
