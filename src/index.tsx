import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { MoviesComponent } from './pages';


(async () => {
    const preloadedState = getPreloadedState();

    ReactDOM.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <MoviesComponent />
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();
