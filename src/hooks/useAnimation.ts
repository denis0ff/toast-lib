import { useEffect, useRef, RefObject, useReducer } from 'react';
import { Direction } from '@types';

export const useAnimation = (
  duration: number,
  callback: () => void
): [Direction, RefObject<HTMLLIElement>, () => void] => {
  const ref = useRef<HTMLLIElement>(null);
  const timerId = useRef<NodeJS.Timeout>();
  const [direction, setDirection] = useReducer((): Direction => 'backward', 'forward');

  useEffect(() => {
    if (direction === 'backward') ref.current?.addEventListener('animationend', callback);
    return () => ref.current?.removeEventListener('animationend', callback);
  });

  useEffect(() => {
    if (duration)
      timerId.current = setTimeout(() => {
        setDirection();
      }, duration);
    return () => clearTimeout(timerId.current);
  }, []);

  return [direction, ref, setDirection];
};
