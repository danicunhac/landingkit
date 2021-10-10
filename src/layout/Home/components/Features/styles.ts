import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 2rem 0 4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  h2 {
    color: #1a202c;
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #000;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  div + div {
    margin-top: 4rem;
  }
`;

export const MicroSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    color: #718096;
    font-size: 20px;
    font-weight: 300;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6f6fe;
  color: #000;
  width: 352px;
  height: 220px;
  border-radius: 10px;
  justify-content: center;
  padding: 4rem 0;

  p {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color: #000;
  }

  strong {
    color: #03a9f4;
    font-weight: 500;
    font-size: 24px;
    margin-top: 1rem;
  }

  button {
    width: 313px;
    height: 62px;
    border-radius: 7px;
    padding: 20px 9px;
    background-color: #03a9f4;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-top: 1rem;
    transition: 0.2s background-color;

    :hover {
      background-color: ${darken(0.1, '#03a9f4')};
    }
  }
`;
