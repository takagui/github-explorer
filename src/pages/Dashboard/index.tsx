import { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import {
  Title,
  Form,
  Error,
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
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories'
    );

    if (!!storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<IRepository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer logo" />
      <Title>
        Explore repositórios no Github
      </Title>

      <Form
        hasError={!!inputError}
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

      {
        !!inputError && <Error>{inputError}</Error>
      }

      <Repositories>
        {
          repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`/repository/${(repository.full_name).replace('/', '-')}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={`avatar ${repository.owner.login}`}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))
        }
      </Repositories>
    </>
  )
}

export { Dashboard };
