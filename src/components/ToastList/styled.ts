import { Position } from '@types';
import { positions } from '@constants';
import styled from 'styled-components';

export const ToastWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ToastList = styled.ul<{ position: Position }>`
  position: absolute;
  ${({ position }) => positions[position]}
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space};
`;
