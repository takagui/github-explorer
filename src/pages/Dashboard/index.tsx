import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {
  Title,
  Form,
  Repositories,
} from './styles';

const Dashboard = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer logo" />
      <Title>
        Explore repositórios no Github
      </Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/93629209?v=4"
            alt="Avatar Taka"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Performance-focused API for React forms rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/93629209?v=4"
            alt="Avatar Taka"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Performance-focused API for React forms rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/93629209?v=4"
            alt="Avatar Taka"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Performance-focused API for React forms rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export { Dashboard };
