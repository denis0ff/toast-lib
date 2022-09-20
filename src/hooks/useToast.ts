import { ToastService } from '@utils';
import { Variant } from '@types';

const toastFactory = (variant: Variant) => (description: string) => {
  ToastService.createToast({ description, variant });
};

export const useToast = () => {
  const info = toastFactory('info');
  const success = toastFactory('success');
  const error = toastFactory('error');
  const warning = toastFactory('warning');

  return { info, success, error, warning };
};
