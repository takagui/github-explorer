import { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import {
  Title,
  Form,
  Repositories,
} from './styles';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<IRepository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer logo" />
      <Title>
        Explore repositórios no Github
      </Title>

      <Form
        onSubmit={handleAddRepository}
      >
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {
          repositories.map(repository => (
            <a key={repository.full_name} href="teste">
              <img
                src={repository.owner.avatar_url}
                alt={`avatar ${repository.owner.login}`}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))
        }
      </Repositories>
    </>
  )
}

export { Dashboard };
