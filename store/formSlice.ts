import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DOB {
  day: string;
  month: string;
  year: string;
}

interface FormState {
  postcode: string;
  title: string;
  firstName: string;
  lastName: string;
  dob: DOB;
  mobile: string;
  email: string;
}

const initialState: FormState = {
  postcode: "",
  title: "",
  firstName: "",
  lastName: "",
  dob: { day: "", month: "", year: "" },
  mobile: "",
  email: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: any }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    updateDOB: (state, action: PayloadAction<DOB>) => {
      state.dob = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, updateDOB, resetForm } = formSlice.actions;
export default formSlice.reducer;
