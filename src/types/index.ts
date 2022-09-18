export type ToastConfig = {
  position: Position;
  space: number;
  color: string;
  animation: Animation;
  variant: Variant;
  title: string;
  description: string;
  duration: number;
};

export type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type Variant = 'info' | 'warning' | 'error' | 'success';

export type Direction = 'forward' | 'backward';

export type Animation = 'fade' | 'slide';

export interface CreateToastProps extends Partial<ToastConfig> {
  description: string;
  title?: string;
}

export interface Toast extends Required<CreateToastProps> {
  id: string;
  removeToast: (id: string) => void;
}

export type RefFunctions = {
  rerender: () => void;
};

export type ToastListProps = {
  rootElement?: string;
  toastConfig: ToastConfig;
};
