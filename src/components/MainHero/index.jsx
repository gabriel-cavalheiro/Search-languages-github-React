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
        title="Titulo-de-teste-para-repositorio"
        name="Gabriel Cavalheiro"
        stars="2345"
        date="2020-09-23"
        language="javascript"
        description="kjdbiuadfmkabdiufh ajskbl nqa iljab lflakhdciusabdlS KIuagdiAJBDilagd blAISHDGiash "
      />
    </ContainerMain>
  );
}
