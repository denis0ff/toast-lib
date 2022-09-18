import { resolveAnimation, variants } from '@constants';
import { Animation, Direction, Variant } from '@types';
import styled, { css } from 'styled-components';

export const ToastContainer = styled.li<{
  color: string;
  variant: Variant;
  space: number;
  animation: Animation;
  direction: Direction;
}>`
  padding: ${({ space }) => `${space}px`};
  width: ${({ theme }) => theme.notifyWidth};
  height: ${({ theme }) => theme.notifyHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ color, variant }) => color || variants[variant].color};
  color: ${({ theme, variant }) =>
    variant === 'warning' ? theme.colors.black : theme.colors.white};
  user-select: none;
  z-index: 1000;

  & * {
    color: inherit;
    font-weight: ${({ theme }) => theme.fontWeight[0]};
  }
  animation: ${({ animation, direction }) =>
    css`
      ${resolveAnimation(animation, direction)}
      ${({ theme }) => theme.transition[2]}
      forwards;
    `};
`;

export const ToastIcon = styled.div<{ variant: Variant }>`
  width: calc(1.4 * ${({ theme }) => theme.fontSize});
  height: calc(1.4 * ${({ theme }) => theme.fontSize});
  background: center / cover no-repeat ${({ variant }) => variants[variant].icon};
`;

export const ToastTextContainer = styled.div`
  flex: 1 0 auto;
`;

export const ToastTitle = styled.h4``;

export const ToastDescription = styled.h5``;

export const ToastButton = styled.button`
  all: unset;
  align-self: flex-start;
  cursor: pointer;
`;
