import { useToast } from '@hooks';
import { ToastService, ToastProvider } from '@src';
import { ToastConfig } from '@types';

export const WithButtons = (args: ToastConfig) => {
  const { info, warning, error, success } = useToast();
  ToastService.toasts = [];
  return (
    <div>
      <button onClick={() => info('Info toast example')}>Add info toast</button>
      <button onClick={() => warning('Warning toast example')}>Add warning toast</button>
      <button onClick={() => error('Error toast example')}>Add error toast</button>
      <button onClick={() => success('Success toast example')}>Add success toast</button>
      <ToastProvider {...args} />
    </div>
  );
};

export default {
  title: 'Toast Library',
  component: ToastProvider,
  argTypes: {
    position: {
      table: {
        defaultValue: {
          summary: 'bottom-left',
        },
      },
    },
    spacing: {
      table: {
        defaultValue: {
          summary: '16',
        },
      },
    },
    animation: {
      table: {
        defaultValue: {
          summary: 'slide',
        },
      },
    },
    duration: {
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    variant: {
      table: {
        defaultValue: {
          summary: 'info',
        },
      },
      options: ['info', 'warning', 'error', 'success'],
    },
  },
};
