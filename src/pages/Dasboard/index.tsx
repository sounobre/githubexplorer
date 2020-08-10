import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://s.aficionados.com.br/imagens/determinado.jpg"
            alt="Shiryu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://s.aficionados.com.br/imagens/determinado.jpg"
            alt="Shiryu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://s.aficionados.com.br/imagens/determinado.jpg"
            alt="Shiryu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
