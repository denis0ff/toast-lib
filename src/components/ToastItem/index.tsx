import { useAnimation, useSwipe } from '@hooks';
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
  duration,
  color,
  variant,
  space,
  animation,
  removeToast,
}: Toast) => {
  const [direction, ref, animatedRemove] = useAnimation(duration, () => removeToast(id));
  const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe(animatedRemove);

  return (
    <ToastContainer
      data-test-id={`toast-${variant}`}
      color={color}
      variant={variant}
      space={space}
      animation={animation}
      direction={direction}
      ref={ref}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ToastIcon variant={variant} />
      <ToastTextContainer>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastTextContainer>
      <ToastButton data-test-id="remove-toast" onClick={animatedRemove}>
        &#10006;
      </ToastButton>
    </ToastContainer>
  );
};

export default ToastItem;
