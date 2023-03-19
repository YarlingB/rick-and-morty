import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/main/mainLayout';
import PlayPage from '../pages/play/play';
import HomePage from '../pages/home/home';
import ROUTES from './routes';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ROOT}>
            **<Route index element={<HomePage />}></Route>**
          </Route>

          <Route path={ROUTES.PLAY} element={<MainLayout />}>
            **<Route index element={<PlayPage />}></Route>**
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
