import { useContext } from 'react';
import { RepositorieContext } from '../../context/RepoContext';
import { useApi } from '../../hooks/useApi';
import { CardRepo } from '../CardRepo';
import { SearchInput } from '../SearchInput';
import { ContainerSearch } from './styles';

export function SearchRepositories() {
  const { language } = useContext(RepositorieContext);
  const baseUrl = 'https://fetch-languages-github.herokuapp.com';
  const path = `/languages/${language}&desc`;

  const { dataRepositorie } = useApi(baseUrl, path);
  const result = dataRepositorie.items;
  console.log(result);

  return (
    <ContainerSearch>
      <h2>Digite a linguagem que deseja buscar</h2>
      <SearchInput />
      {result?.map((item) => (
        <CardRepo
          key={item.id}
          title={item.name}
          name={item.owner.login}
          stars={item.stargazers_count}
          date={item.created_at}
          language={item.language}
          description={item.description}
          url={item.owner.html_url}
        />
      ))}
    </ContainerSearch>
  );
}
