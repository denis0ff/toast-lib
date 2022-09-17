import { Animation, Direction } from '@types';
import { keyframes } from 'styled-components';

export const slide = {
  forward: keyframes`
    from { transform: translateX(-100%) }
    to { transform: translateX(0) }
  `,
  backward: keyframes`
    from { transform: translateX(0) }
    to { transform: translateX(-100%) }
  `,
};

const fade = {
  forward: keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
  `,
  backward: keyframes`
    from { opacity: 1 }
    to { opacity: 0 }
  `,
};

export const resolveAnimation = (name: Animation, direction: Direction) => {
  if (name === 'slide') return slide[direction];
  return fade[direction];
};
