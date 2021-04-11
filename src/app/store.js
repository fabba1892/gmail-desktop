import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});

// dataLlayer setup with dispatch and pull function
// userSlice datalayer setup


