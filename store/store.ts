import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepSlice";
import postcodeReducer from "./slices/postcodeSlice";
import detailsReducer from "./slices/detailsSlice";
import contactReducer from "./slices/contactSlice";
import signatureReducer from "./slices/signatureSlice"

export const store = configureStore({
  reducer: {
    step: stepReducer,
    postcode: postcodeReducer,
    details: detailsReducer,
    contact: contactReducer,
    signature: signatureReducer,
  },
});

// Types for useDispatch and useSelector hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
