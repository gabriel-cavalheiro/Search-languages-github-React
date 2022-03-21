import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Home } from './pages/Home/index';
import { SearchRepos } from './pages/SearchRepos';

export function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRepos />} />
      </Routes>
    </BrowserRouter>
  );
}
