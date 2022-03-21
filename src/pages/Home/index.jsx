import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
import { MainHero } from '../../components/MainHero/index';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <MainHero />
      <Footer />
    </Container>
  );
}
