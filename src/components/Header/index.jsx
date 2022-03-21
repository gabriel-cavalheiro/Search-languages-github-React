import {
  HeaderContainer, DivLogo, Title, Button,
} from './styles';
import logoImg from '../../assets/Logo.svg';
import IconGithub from '../../assets/icon-github.svg';

export function Header() {
  return (
    <HeaderContainer>
      <DivLogo>
        <img src={logoImg} alt="Logo do site" />
        <Title>GithubLanguages</Title>
      </DivLogo>
      <Button href="https://github.com/gabriel-cavalheiro/Search-languages-github-react" target="_blank">
        <img src={IconGithub} alt="logo do site" />
        Ir ao Código Fonte
      </Button>
    </HeaderContainer>
  );
}
