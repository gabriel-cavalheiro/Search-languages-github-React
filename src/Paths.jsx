import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Repositories } from './pages/Repositories';

export function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
