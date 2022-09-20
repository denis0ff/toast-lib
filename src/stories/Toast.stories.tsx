import { useToast } from '@hooks';
import { ToastProvider } from '@App';
import { ToastConfig } from '@types';
import { Button } from './styled';

export const WithButtons = (args: ToastConfig) => {
  const { info, warning, error, success } = useToast();
  return (
    <>
      <Button data-test-id="btn-info-toast" onClick={() => info('Info toast example')}>
        Add info toast
      </Button>
      <Button data-test-id="btn-warning-toast" onClick={() => warning('Warning toast example')}>
        Add warning toast
      </Button>
      <Button data-test-id="btn-error-toast" onClick={() => error('Error toast example')}>
        Add error toast
      </Button>
      <Button data-test-id="btn-success-toast" onClick={() => success('Success toast example')}>
        Add success toast
      </Button>
      <ToastProvider {...args} />
    </>
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
    space: {
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
