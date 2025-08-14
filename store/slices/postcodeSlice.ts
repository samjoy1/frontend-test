import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostcodeState {
  postcode: string;
  postcodeError: string;
}

const initialState: PostcodeState = {
  postcode: "",
  postcodeError: "",
};

const postcodeSlice = createSlice({
  name: "postcode",
  initialState,
  reducers: {
    setPostcode(state, action: PayloadAction<string>) {
      state.postcode = action.payload;
    },
    setPostcodeError(state, action: PayloadAction<string>) {
      state.postcodeError = action.payload;
    },
  },
});

export const { setPostcode, setPostcodeError } = postcodeSlice.actions;

export const selectPostcode = (state: { postcode: PostcodeState }) =>
  state.postcode.postcode;
export const selectPostcodeError = (state: { postcode: PostcodeState }) =>
  state.postcode.postcodeError;

export default postcodeSlice.reducer;
