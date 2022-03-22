import React, {
  createContext, useState, useMemo, useRef,
} from 'react';
import { debounce } from 'lodash';

export const RepositorieContext = createContext();

export function RepositorieProvider({ children }) {
  const [language, setLanguage] = useState('');
  const delayedQuery = useRef(
    debounce((event) => {
      setLanguage(event);
    }, 500),
  ).current;
  // Realiza um delay na request do input para evitar chamadas desnecessárias

  function handleInputSearchRepositorie(event) {
    delayedQuery(event.target.value);
  }
  const infoRepositories = useMemo(() => ({
    language,
    handleInputSearchRepositorie,
  }), [language]);

  return (
    <RepositorieContext.Provider
      value={infoRepositories}
    >
      {children}
    </RepositorieContext.Provider>
  );
}
