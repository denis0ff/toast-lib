import { variants } from '@constants';
import { Variant } from '@types';
import styled from 'styled-components';

export const ToastContainer = styled.li<{ color: string; variant: Variant; space: number }>`
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
  & * {
    color: inherit;
    font-weight: ${({ theme }) => theme.fontWeight[0]};
  }
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
