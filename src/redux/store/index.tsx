import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { persistCombineReducers, persistStore } from "reduxjs-toolkit-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
import { testReducer } from "../reducers"
const reducer = { test: testReducer }

const persistConfig = {
  // for page load when refreshing slowness omfg
  timeout: 100,
  key: "root",
  storage
  // blacklist: [],
  // whitelist: [] // only navigation will be persisted
  /*   transforms: [voucherSubsetFilter, cartSubsetFilter, cartReducerSubsetFilter], */
  //   transforms: [cartSubsetFilter, cartReducerSubsetFilter]
}

const persistedReducer = persistCombineReducers(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }) /* .concat(logger), */
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
