import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.ts';
import App from './components/App/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
