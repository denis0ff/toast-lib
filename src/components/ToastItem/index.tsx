import { useEffect, useRef } from 'react';
import { useAnimation } from '@hooks';
import { Toast } from '@types';
import {
  ToastButton,
  ToastContainer,
  ToastDescription,
  ToastIcon,
  ToastTextContainer,
  ToastTitle,
} from './styled';

const ToastItem = ({
  title,
  description,
  id,
  removeToast,
  setTimer,
  duration,
  color,
  variant,
  space,
  animation,
}: Toast) => {
  const ref = useRef<HTMLLIElement>(null);
  const [direction, handleRemove] = useAnimation(ref.current, () => removeToast(id));

  useEffect(() => {
    if (!duration) return;
    const timerId = setTimer(id, duration);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <ToastContainer
      color={color}
      variant={variant}
      space={space}
      animation={animation}
      direction={direction}
      ref={ref}
    >
      <ToastIcon variant={variant} />
      <ToastTextContainer>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastTextContainer>
      <ToastButton onClick={handleRemove}>&#10006;</ToastButton>
    </ToastContainer>
  );
};

export default ToastItem;
