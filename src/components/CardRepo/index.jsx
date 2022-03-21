import { ContainerCard, UserProfile, TitleRepo } from './styles';
import Usericon from '../../assets/icon-user.svg';
import Staricon from '../../assets/icon-star.svg';
import Timeicon from '../../assets/icon-clock.svg';
import Codeicon from '../../assets/icon-code.svg';
import GithubIcon from '../../assets/icon-github-purple.svg';

export function CardRepo({
  title, name, stars, date, language, description, url,
}) {
  return (
    <ContainerCard>
      <header>
        <UserProfile />
        <TitleRepo>{title}</TitleRepo>
      </header>
      <ul>
        <li>
          <img src={Usericon} alt="ícone usuário" />
          {name}
        </li>
        <li>
          <img src={Staricon} alt="ícone usuário" />
          {stars}
        </li>
        <li>
          <img src={Timeicon} alt="ícone usuário" />
          {date}
        </li>
        <li>
          <img src={Codeicon} alt="ícone usuário" />
          {language}
        </li>
      </ul>
      <span>Descrição:</span>
      <h5>
        {description}
      </h5>

      <a href={`/${url}`}>
        <img src={GithubIcon} alt="Ícone do Github" />
        Ver repositório
      </a>
    </ContainerCard>
  );
}
