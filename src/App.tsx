import React, { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout, Loader } from './components';
import Home from './pages/Home/Home';
import { createGuestSession } from './services/api/createGuestSession';

import './scss/main.scss';

const ContentList = lazy(() => import('./pages/ContentList/ContentList'));
const ContentDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const RateList = lazy(() => import('./pages/Ratelist/RateList'));

const App: React.FC = () => {
    createGuestSession();

    return (
        <div style={{ position: 'relative' }}>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/content/:category"
                        element={(
                            <Suspense fallback={<Loader />}>
                                <ContentList />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="/content/:category/:id"
                        element={(
                            <Suspense fallback={<Loader />}>
                                <ContentDetails />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="/rated/:category"
                        element={(
                            <Suspense fallback={<Loader />}>
                                <RateList />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="*"
                        element={(
                            <Suspense fallback={<Loader />}>
                                <NotFound />
                            </Suspense>
                        )}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
