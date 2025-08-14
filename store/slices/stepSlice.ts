import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Step = "start" | "postcode" | "details" | "contact" | "signature" | "complete" ;

interface StepState {
  currentStep: Step;
}

const initialState: StepState = {
  currentStep: "start",
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<Step>) {
      state.currentStep = action.payload;
    },
  },
});

export const { setStep } = stepSlice.actions;

export const selectStep = (state: { step: StepState }) =>
  state.step.currentStep;

export default stepSlice.reducer;
