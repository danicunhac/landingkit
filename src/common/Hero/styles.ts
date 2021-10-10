import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0.75rem;
  text-align: center;
  gap: 2rem;

  h1 {
    font-size: 48px;
    font-weight: 600;
    color: #1a202c;
  }

  strong {
    font-size: 48px;
    font-weight: 600;
    color: #03a9f4;
    max-width: 260px;
  }

  h2 {
    color: #718094;
    font-weight: 400;
    font-size: 24px;
  }

  button {
    width: 313px;
    border-radius: 7px;
    height: 62px;
    padding: 9px 20px;
    background-color: #03a9f4;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-top: 2rem;
    transition: 0.2s background-color;

    :hover {
      background-color: ${darken(0.1, '#03a9f4')};
    }
  }
`;
