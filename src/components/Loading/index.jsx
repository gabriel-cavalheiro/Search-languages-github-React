import { ContainerLoad, Spinner } from './styles';

export function Loading() {
  return (
    <ContainerLoad>
      <Spinner />
      <div>Carregando...</div>
    </ContainerLoad>

  );
}
