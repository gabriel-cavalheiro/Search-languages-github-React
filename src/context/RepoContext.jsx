import React, {
  createContext, useState, useMemo, useRef,
} from 'react';
import { debounce } from 'lodash';

export const RepositorieContext = createContext();

export function CoinProvider({ children }) {
  const [repositorie, setRepositorie] = useState('');
  const delayedQuery = useRef(
    debounce((event) => {
      setRepositorie(event);
    }, 500),
  ).current;
  // Realiza um delay na request do input para evitar chamadas desnecessárias

  function handleInputSearchRepositorie(event) {
    delayedQuery(event.target.value);
  }
  const infoRepositories = useMemo(() => ({
    repositorie,
    handleInputSearchRepositorie,
  }), [repositorie]);

  return (
    <RepositorieContext.Provider
      value={infoRepositories}
    >
      {children}
    </RepositorieContext.Provider>
  );
}
