import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './ducks'
import cartReducer from '../app/pages/Cart/cartStore/ducks'

export const store = configureStore({
  reducer: {
      productsReducer,
      cartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
