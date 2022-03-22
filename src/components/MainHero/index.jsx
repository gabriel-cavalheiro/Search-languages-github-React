import {
  ContainerMain, SectionText, SpanColor, Button,
} from './styles';
import ArrowImg from '../../assets/icon-arrow.svg';
import { CardRepo } from '../CardRepo';

export function MainHero() {
  return (
    <ContainerMain>
      <SectionText>
        Que tal conhecer os repositórios do Github
        {' '}
        feitos na sua
        {' '}
        <SpanColor>linguagem favorita ?</SpanColor>

        <Button href="/search">
          Buscar Linguagem
          <img src={ArrowImg} alt="ícone de seta" />
        </Button>
      </SectionText>
      <CardRepo
        photoUser="https://avatars.githubusercontent.com/u/83965641?v=4"
        title="Pesquise-sua-linguagem💙"
        name="Gabriel Cavalheiro"
        stars="3345"
        date="2022-03-21"
        language="javascript"
        description="Projeto em React.js que realiza busca nos repositórios do Github pela linguagem predominante em que foi escrita."
        url="https://github.com/gabriel-cavalheiro/Search-languages-github-react"
      />
    </ContainerMain>
  );
}
