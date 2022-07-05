/** Dep imports */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Link,
  Route,
  Outlet,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

/** Local imports */
import HomePage from './home';
import TestPage from './test';
import { StateProvider } from './state';

/** Style imports */
import '../../src/styles/index.scss';

const AppLayout = () => (
  <>
    <nav className="wrap pad" style={{ textAlign: 'center' }}>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        <li style={{ padding: '8px' }}>
          <Link to="/">Home page</Link>
        </li>
        <li style={{ padding: '8px' }}>
          <Link to="/test">Test page</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

const App = () => (
  <StrictMode>
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="test" element={<TestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </StrictMode>
);

export const elem = document.getElementById('root') as HTMLElement;
export const root = createRoot(elem);

root.render(<App />);