import styled from 'styled-components';

type ContainerProps = {
  width?: string;
  justify?: string;
};

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;

  div + div {
    margin-top: 1.5rem;
  }
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width = '100%' }) => width};
  display: flex;
  justify-content: ${({ justify = '' }) => justify};
  align-items: center;

  span {
    font-weight: 400;
    color: #2d3748;
    font-size: 20px;
  }
`;
