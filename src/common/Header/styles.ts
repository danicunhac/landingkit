import styled, { css } from 'styled-components';
import { darken } from 'polished';

type IconProps = {
  color: string;
};

type ContainerProps = {
  width?: string;
  justify?: string;
};

export const Wrapper = styled.header`
  height: 3.5rem;
  padding: 4rem 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7fafc;
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width = '100%' }) => width};
  display: flex;
  justify-content: ${({ justify = '' }) => justify};
  align-items: center;
`;

export const Icon = styled.a<IconProps>`
  ${({ color }) => css`
    color: ${color};
    transition: 0.2s color;

    &:hover {
      color: ${darken(0.1, color)};
    }
  `};
`;
