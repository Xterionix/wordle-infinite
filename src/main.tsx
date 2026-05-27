import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

if (import.meta.env.DEV) {
  const script = document.createElement('script')
  script.src = 'http://localhost:8097'
  document.head.appendChild(script)
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);