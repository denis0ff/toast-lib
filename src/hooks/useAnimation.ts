import { useState, useEffect } from 'react';
import { Direction } from '@types';

export const useAnimation = (
  ref: HTMLElement | null,
  callback: () => void
): [Direction, () => void] => {
  const [direction, setDirection] = useState<Direction>('forward');

  useEffect(() => {
    if (direction === 'backward' && ref) ref.addEventListener('animationend', callback);
    return () => ref?.removeEventListener('animationend', callback);
  });

  const handleRemove = () => {
    setDirection('backward');
  };
  return [direction, handleRemove];
};
