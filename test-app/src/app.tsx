/** Dep imports */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  Outlet,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

/** Local imports */
import HomePage from './home';

/** Style imports */
import '../../pkg/public/css/styles.css';

const AppLayout = () => (
  <Outlet />
);

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

export const elem = document.getElementById('root') as HTMLElement;
export const root = createRoot(elem);

root.render(<App />);