import { Header } from '../Header';
import { MainHero } from '../MainHero';
import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
      <MainHero />
    </Container>
  );
}
