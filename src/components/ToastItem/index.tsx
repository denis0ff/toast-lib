import { useEffect } from 'react';

import { Toast } from '@types';

const ToastItem = ({ title, description, id, removeToast, setTimer, duration }: Toast) => {
  const handleRemove = () => removeToast(id);

  useEffect(() => {
    if (!duration) return;
    const timerId = setTimer(id, duration);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <li>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={handleRemove}>&#10006;</button>
    </li>
  );
};

export default ToastItem;
