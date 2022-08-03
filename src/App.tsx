import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import {
    ContentList,
    Home,
    MovieDetails,
    NotFound,
    RateList,
} from './pages';
import { createGuestSession } from './services/api/createGuestSession';

import './scss/main.scss';

const App: React.FC = () => {
    createGuestSession();

    return (
        <div style={{ position: 'relative' }}>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/content/:category" element={<ContentList />} />
                    <Route path="/content/:category/:id" element={<MovieDetails />} />
                    <Route path="/rated/:category" element={<RateList />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
