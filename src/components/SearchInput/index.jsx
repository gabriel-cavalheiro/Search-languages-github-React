import { useContext } from 'react';
import { RepositorieContext } from '../../context/RepoContext';
import { Search } from './styles';

export function SearchInput() {
  const { handleInputSearchRepositorie } = useContext(RepositorieContext);

  return (
    <Search
      type="text"
      placeholder="Buscar..."
      onChange={handleInputSearchRepositorie}
    />
  );
}
