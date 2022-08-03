import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services';
import filterReducer from './slices/filter/filter.slice';

export const store = configureStore({
    reducer: {
        filterReducer,
        [tmdbApi.reducerPath]: tmdbApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
