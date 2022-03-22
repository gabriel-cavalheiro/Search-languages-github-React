import {
  ContainerCard, UserProfile, TitleRepo, Label,
} from './styles';
import Usericon from '../../assets/icon-user.svg';
import Staricon from '../../assets/icon-star.svg';
import Timeicon from '../../assets/icon-clock.svg';
import Codeicon from '../../assets/icon-code.svg';
import GithubIcon from '../../assets/icon-github-purple.svg';

export function CardRepo({
  title, photoUser, name, stars, date, language, description, url,
}) {
  return (
    <ContainerCard>
      <header>
        <UserProfile photoUser={photoUser} />
        <TitleRepo>{title}</TitleRepo>
      </header>
      <ul>
        <li>
          <img src={Usericon} alt="ícone usuário" />
          {name}
        </li>
        <li>
          <img src={Staricon} alt="ícone de estrelas" />
          {stars}
        </li>
        <li>
          <img src={Timeicon} alt="ícone relógio" />
          {date.slice(0, 10)}
        </li>
        <li>
          <img src={Codeicon} alt="ícone de código" />
          {language}
        </li>
      </ul>
      <Label>Descrição:</Label>
      <p>
        { description != null && description.lengt > 150 ? `${description.slice(0, 150)}...` : description }
      </p>

      <a href={url} target="_blank" rel="noreferrer">
        <img src={GithubIcon} alt="Ícone do Github" />
        Ver repositório
      </a>
    </ContainerCard>
  );
}
