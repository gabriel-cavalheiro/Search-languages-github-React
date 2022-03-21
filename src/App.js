import { Paths } from './Paths';
import GlobalStyles from './styles/global';
import { RepositorieProvider } from './context/RepoContext';

function App() {
  return (
    <RepositorieProvider>
      <GlobalStyles />
      <Paths />
    </RepositorieProvider>
  );
}

export default App;
