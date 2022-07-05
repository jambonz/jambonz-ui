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
import KOPPage from './pages/kop';
import HomePage from './pages/home';
import TestPage from './pages/test';
import { StateProvider } from './state';

/** Style imports */
import '../../src/styles/index.scss';

const AppLayout = () => (
  <>
    <nav className="wrap bg--dark" style={{ textAlign: 'center', paddingTop: '16px', paddingBottom: '16px', position: 'sticky', top: 0 }}>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        <li style={{ padding: '8px' }}>
          <Link to="/">Home page</Link>
        </li>
        <li style={{ padding: '8px' }}>
          <Link to="/test">Test page</Link>
        </li>
        <li style={{ padding: '8px' }}>
          <Link to="/kop">KOP page</Link>
        </li>
      </ul>
    </nav>
    <main>
      <Outlet />
    </main>
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
            <Route path="kop" element={<KOPPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  </StrictMode>
);

export const elem = document.getElementById('root') as HTMLElement;
export const root = createRoot(elem);

root.render(<App />);