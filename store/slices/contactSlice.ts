import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  mobile: string;
  email: string;
}

const initialState: ContactState = {
  mobile: "",
  email: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setMobile(state, action: PayloadAction<string>) {
      state.mobile = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const { setMobile, setEmail } = contactSlice.actions;

export const selectMobile = (state: { contact: ContactState }) =>
  state.contact.mobile;
export const selectEmail = (state: { contact: ContactState }) =>
  state.contact.email;

export default contactSlice.reducer;
