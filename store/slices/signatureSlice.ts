// store/slices/signatureSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignatureState {
  dataUrl: string | null;
}

const initialState: SignatureState = {
  dataUrl: null,
};

const signatureSlice = createSlice({
  name: "signature",
  initialState,
  reducers: {
    setSignature(state, action: PayloadAction<string>) {
      state.dataUrl = action.payload;
    },
    clearSignature(state) {
      state.dataUrl = null;
    },
  },
});

export const { setSignature, clearSignature } = signatureSlice.actions;
export const selectSignature = (state: RootState) => state.signature.dataUrl;
export default signatureSlice.reducer;
