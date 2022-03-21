import { ContainerCard, UserProfile, TitleRepo } from './styles';
import Usericon from '../../assets/icon-user.svg';
import Staricon from '../../assets/icon-star.svg';
import Timeicon from '../../assets/icon-clock.svg';
import Codeicon from '../../assets/icon-code.svg';
import GithubIcon from '../../assets/icon-github-purple.svg';

export function CardRepo() {
  return (
    <ContainerCard>
      <header>
        <UserProfile />
        <TitleRepo>Teste de título</TitleRepo>
      </header>
      <ul>
        <li>
          <img src={Usericon} alt="ícone usuário" />
          {' '}
          Gabriel Cavalheiro
        </li>
        <li>
          <img src={Staricon} alt="ícone usuário" />
          {' '}
          1343653
        </li>
        <li>
          <img src={Timeicon} alt="ícone usuário" />
          {' '}
          2020-09-23
        </li>
        <li>
          <img src={Codeicon} alt="ícone usuário" />
          {' '}
          Javascript
        </li>
      </ul>
      <span>Descrição:</span>
      <h5>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quos molestias officia sequi facilis enim earum suscipit ea
        pariatur placeat excepturi, dolorem, necessitatibus quidem
        saepe
      </h5>

      <a href="/">
        <img src={GithubIcon} alt="Ícone do Github" />
        Ver repositório
      </a>
    </ContainerCard>
  );
}
