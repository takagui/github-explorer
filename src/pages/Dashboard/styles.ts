import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IFormProps {
  hasError: boolean;
}

const Title = styled.h1`
  font-size: 3rem;
  color: #3A3A3A;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

const Form = styled.form<IFormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 2px solid #FFF;
    border-right: 0;

    ${(props) => props.hasError && css`
      border-color: #C53030;
    `}

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04D361')};
    }
  }
`;

const Error = styled.span`
  display: block;
  color: #C53030;
  margin-top: 8px;
`;

const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }
  }
`;

export {
  Title,
  Form,
  Error,
  Repositories,
}
