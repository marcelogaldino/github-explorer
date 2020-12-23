import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/13842365?s=460&u=c8e869d1dc262659da5517a1ff17759f174b4334&v=4"
            alt="Marcelo Galdino"
          />
          <div>
            <strong>Marcelo</strong>
            <p>aoihiueheuiah aeeheahaeiua 09aue98e </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/13842365?s=460&u=c8e869d1dc262659da5517a1ff17759f174b4334&v=4"
            alt="Marcelo Galdino"
          />
          <div>
            <strong>Marcelo</strong>
            <p>aoihiueheuiah aeeheahaeiua 09aue98e </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/13842365?s=460&u=c8e869d1dc262659da5517a1ff17759f174b4334&v=4"
            alt="Marcelo Galdino"
          />
          <div>
            <strong>Marcelo</strong>
            <p>aoihiueheuiah aeeheahaeiua 09aue98e </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
