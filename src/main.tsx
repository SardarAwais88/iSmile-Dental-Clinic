// Guard against environments where window.fetch has only a getter
try {
  if (typeof window !== 'undefined') {
    const existingDescriptor = Object.getOwnPropertyDescriptor(window, 'fetch') || 
                               (typeof Window !== 'undefined' ? Object.getOwnPropertyDescriptor(Window.prototype, 'fetch') : undefined);
    if (!existingDescriptor || !existingDescriptor.set) {
      let currentFetch = window.fetch ? window.fetch.bind(window) : undefined;
      const safeDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get: () => currentFetch,
        set: (fn) => {
          currentFetch = fn;
        }
      };
      try {
        Object.defineProperty(window, 'fetch', safeDescriptor);
      } catch {
        // ignore
      }
      try {
        if (typeof Window !== 'undefined' && Window.prototype) {
          Object.defineProperty(Window.prototype, 'fetch', safeDescriptor);
        }
      } catch {
        // ignore
      }
    }
  }
} catch {
  // ignore
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
