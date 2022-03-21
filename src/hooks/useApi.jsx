import { useState, useEffect } from 'react';
import axios from 'axios';

export function useApi(baseUrl, endpoint) {
  const [dataRepositorie, setDataRepositorie] = useState([]);

  const api = axios.create({
    baseURL: baseUrl,
  });

  useEffect(() => {
    api.get(endpoint)
      .then(({ data }) => {
        setDataRepositorie(data);
      });
  }, [endpoint]);

  return { dataRepositorie };
}
