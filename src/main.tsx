import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ThemeProvider from './theme/index.tsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
