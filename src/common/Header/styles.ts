import styled from 'styled-components';

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
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width = '100%' }) => width};
  display: flex;
  justify-content: ${({ justify = '' }) => justify};
  align-items: center;
`;
