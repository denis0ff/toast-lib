import { ToastConfig } from '@types';

export const positions = {
  'top-left': 'top: 10px; left: 10px;',
  'top-center': 'top: 10px; left 50%; transform: translateX(-50%);',
  'top-right': 'top: 10px; right: 10px;',
  'bottom-left': 'left 10px; bottom: 10px;',
  'bottom-right': 'right: 10px; bottom: 10px;',
  'bottom-center': 'left: 50%; bottom: 10px; transform: translateX(-50%);',
};

export const variants = {
  info: {
    color: '#9A40D3',
    icon: `url(${process.env.PUBLIC_URL}/icons/info.svg)`,
  },
  warning: {
    color: '#F4E048',
    icon: `url(${process.env.PUBLIC_URL}/icons/warning.svg)`,
  },
  error: {
    color: '#E25837',
    icon: `url(${process.env.PUBLIC_URL}/icons/error.svg)`,
  },
  success: {
    color: '#37E29A',
    icon: `url(${process.env.PUBLIC_URL}/icons/success.svg)`,
  },
};

export const NOTIFICATION_COUNT = 3;

export const defaultToastProps: Required<ToastConfig> = {
  position: 'bottom-left',
  space: 16,
  color: '',
  animation: 'slide',
  variant: 'info',
  title: '',
  duration: 0,
};
