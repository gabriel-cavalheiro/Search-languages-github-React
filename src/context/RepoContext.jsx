import React, {
  createContext, useState, useMemo, useRef,
} from 'react';
import { debounce } from 'lodash';

export const RepositorieContext = createContext();

export function RepositorieProvider({ children }) {
  const [language, setLanguage] = useState('');
  const [load, setLoad] = useState(false);

  const delayedQuery = useRef(
    debounce((event) => {
      setLanguage(event);
      setLoad(false);
    }, 2000),
  ).current;
  // Realiza um delay na request do input para evitar chamadas desnecessárias

  function handleInputSearchRepositorie(event) {
    delayedQuery(event.target.value);
  }

  function showLoading() {
    setLoad(true);
  }

  const infoRepositories = useMemo(() => ({
    language,
    load,
    handleInputSearchRepositorie,
    showLoading,
  }), [language, load]);

  return (
    <RepositorieContext.Provider
      value={infoRepositories}
    >
      {children}
    </RepositorieContext.Provider>
  );
}
