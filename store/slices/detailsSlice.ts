import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Dob {
  day: string;
  month: string;
  year: string;
}

interface DetailsState {
  title: string;
  firstName: string;
  lastName: string;
  dob: Dob;
}

const initialState: DetailsState = {
  title: "",
  firstName: "",
  lastName: "",
  dob: { day: "", month: "", year: "" },
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setDob(state, action: PayloadAction<Dob>) {
      state.dob = action.payload;
    },
  },
});

export const { setTitle, setFirstName, setLastName, setDob } =
  detailsSlice.actions;

export const selectTitle = (state: { details: DetailsState }) =>
  state.details.title;
export const selectFirstName = (state: { details: DetailsState }) =>
  state.details.firstName;
export const selectLastName = (state: { details: DetailsState }) =>
  state.details.lastName;
export const selectDob = (state: { details: DetailsState }) =>
  state.details.dob;

export default detailsSlice.reducer;
