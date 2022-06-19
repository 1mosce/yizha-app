import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    id: 1,
    cart: [],
    total: 0,
    user: {},
  },
  reducers: {
    setId: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total += action.payload.price;
      console.log(state.cart);
    },
    emptyCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { setId, addItemToCart, emptyCart } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.id;

export default counterSlice.reducer;
