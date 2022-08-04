import React, { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout, Loader } from './components';
import Home from './pages/Home/Home';
import { createGuestSession } from './services/api/createGuestSession';

import './scss/main.scss';

const ContentList = lazy(() => import(
    /* webpackChunkName: "ContentList" */
    './pages/ContentList/ContentList'
));
const ContentDetails = lazy(() => import(
    /* webpackChunkName: "ContentDetails" */
    './pages/ContentDetails/ContentDetails'
));
const NotFound = lazy(() => import(
    /* webpackChunkName: "ContentList" */
    './pages/NotFound/NotFound'
));
const RateList = lazy(() => import(
    /* webpackChunkName: "ContentList" */
    './pages/Ratelist/RateList'
));

const App: React.FC = () => {
    createGuestSession();

    return (
        <div style={{ position: 'relative' }}>
            <Suspense>
                <Routes>
                    <Route path="" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="/content/:category"
                            element={<ContentList />}
                        />
                        <Route
                            path="/content/:category/:id"
                            element={<ContentDetails />}
                        />
                        <Route
                            path="/rated/:category"
                            element={<RateList />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
