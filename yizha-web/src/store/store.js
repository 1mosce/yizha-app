import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from '../features/counterSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
