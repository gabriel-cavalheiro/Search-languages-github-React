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
      <CardRepo />
    </ContainerMain>
  );
}
