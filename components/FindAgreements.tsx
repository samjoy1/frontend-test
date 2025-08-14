"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import SignaturePad from "./SignaturePad";
import { RootState, AppDispatch } from "..//store/store"; // Adjust the path to your store
import { setStep, selectStep } from "../store/slices/stepSlice";
import {
  setPostcode,
  setPostcodeError,
  selectPostcode,
  selectPostcodeError,
} from "../store/slices/postcodeSlice";
import {
  setTitle,
  setFirstName,
  setLastName,
  setDob,
  selectTitle,
  selectFirstName,
  selectLastName,
  selectDob,
} from "../store/slices/detailsSlice";
import {
  setMobile,
  setEmail,
  selectMobile,
  selectEmail,
} from "../store/slices/contactSlice";
import { setSignature, selectSignature } from "../store/slices/signatureSlice";

export default function FindAgreements() {
  const dispatch = useDispatch<AppDispatch>();

  // Step
  const step = useSelector(selectStep);

  // Postcode state + error
  const postcode = useSelector(selectPostcode);
  const postcodeError = useSelector(selectPostcodeError);

  // Details state
  const title = useSelector(selectTitle);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const dob = useSelector(selectDob);

  // Contact state
  const mobile = useSelector(selectMobile);
  const email = useSelector(selectEmail);

  // Signature state
  const signatureData = useSelector(selectSignature);

  // Validate postcode (same regex)
  const validatePostcode = (code: string) => {
    const regex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
    return regex.test(code.trim());
  };

  // Handlers for each step

  const handlePostcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setPostcodeError(""));

    if (validatePostcode(postcode)) {
      dispatch(setStep("details"));
    } else {
      dispatch(setPostcodeError("Please enter a valid UK postcode."));
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setStep("contact"));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You could do validation here before continuing

    dispatch(setStep("signature"));
  };

  const handleSaveSignature = (dataUrl: string) => {
    dispatch(setSignature(dataUrl));
    dispatch(setStep("complete"));
  };

  const stepContent = {
    start: {
      headline: "You could be owed up to £5,318.25* per car finance agreement.",
      subheading:
        "Check in under 60 seconds to see if you're owed compensation. Use the free agreement finder to start your claim.",
    },
    postcode: {
      headline: "Your Current Address",
      subheading: "We need your current address to find your finance agreements",
    },
    details: {
      headline: "Your Personal Details",
      subheading: "Your current personal details are essential to search for all finance agreements attached to your name",
    },
    contact: {
      headline: "Enter Mobile Number And Email Address",
      subheading: "We will use these details to cross reference any car finance agreements you've had.",
    },
    signature: {
      headline: `Great News, ${firstName}, we've found 3 claims`,
      subheading: "Submit your claim to reveal your lenders and potential compensation amount.",
    },
    complete: {
      headline: `Congratulations, ${firstName}, your claim is now submitted.`,
      subheading: "Your potential claim value is £15,954.75*",
    },
  };

  return (
    <>
      <div className="text-align-left mb-6">
        <h1 className="text-[2.1rem] leading-tight font-bold mb-2">
          {stepContent[step]?.headline}
        </h1>
        <h2 className="text-xl text-gray-500">
          {stepContent[step]?.subheading}
        </h2>
      </div>

      {/*STEP 1 - FIND MY AGREEMENTS*/}
      {step === "start" && (
        <div className="flex justify-center mb-4">
          <button
            onClick={() => dispatch(setStep("postcode"))}
            className="focus:outline-none"
          >
            <Image
              src="/assets/find-my-agreements.svg"
              alt="Find my agreements"
              width={500}
              height={300}
            />
          </button>
        </div>
      )}

      {/*STEP 2 - POSTCODE*/}
      {step === "postcode" && (
        <form onSubmit={handlePostcodeSubmit} className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-gray-700">
            Enter your postcode and tap 'Search'.
          </label>
          <div className="flex w-full max-w-sm gap-2 mb-2">
            <input
              type="text"
              placeholder="Postcode"
              className="flex-1 px-4 py-2 rounded-md bg-gray-200"
              value={postcode}
              onChange={(e) => dispatch(setPostcode(e.target.value))}
            />
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-full"
            >
              Search
            </button>
          </div>

          {postcodeError && (
            <p className="text-red-600 mt-2 text-sm text-center">
              {postcodeError}
            </p>
          )}
        </form>
      )}

      {/*STEP 3 - PERSONAL DETAILS*/}
      {step === "details" && (
        <form
          onSubmit={handleDetailsSubmit}
          className="flex flex-col gap-4 items-center mb-4 animate-fade-in w-full max-w-md mx-auto"
        >
          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Title
            </label>
            <select
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>
          </div>

          <div className="w-full bg-gray-200 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => dispatch(setFirstName(e.target.value))}
              required
            />
          </div>

          <div className="w-full bg-gray-200 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => dispatch(setLastName(e.target.value))}
              required
            />
          </div>

          <div className="w-full">
            <label className="mb-1 font-medium text-gray-700">
              Date of Birth
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="DD"
                value={dob.day}
                onChange={(e) =>
                  dispatch(setDob({ ...dob, day: e.target.value }))
                }
                className="w-1/3 px-3 py-2 rounded-md text-center bg-gray-200"
                maxLength={2}
                required
              />
              <input
                type="text"
                placeholder="MM"
                value={dob.month}
                onChange={(e) =>
                  dispatch(setDob({ ...dob, month: e.target.value }))
                }
                className="w-1/3 px-3 py-2 rounded-md text-center bg-gray-200"
                maxLength={2}
                required
              />
              <input
                type="text"
                placeholder="YYYY"
                value={dob.year}
                onChange={(e) =>
                  dispatch(setDob({ ...dob, year: e.target.value }))
                }
                className="w-1/3 px-3 py-2 rounded-md text-center bg-gray-200"
                maxLength={4}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-600 text-white py-2 px-6 rounded w-full"
          >
            Next →
          </button>
        </form>
      )}

      {/*STEP 4 - CONTACT DETAILS*/}
      {step === "contact" && (
        <form
          onSubmit={handleContactSubmit}
          className="flex flex-col gap-4 items-center mb-4 animate-fade-in w-full max-w-md mx-auto"
        >
          <div className="w-full">
            <label className="block mb-1 font-bold text-xl">
              Your Mobile Number
            </label>
            <label className="block mb-1 text-sm">
              For example: 07123456789
            </label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => dispatch(setMobile(e.target.value))}
              className="w-full px-3 py-2 rounded-md bg-gray-200"
              required
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-bold text-xl">
              Your Email Address
            </label>
            <label className="block mb-1 text-sm">
              For example: John@example.co.uk
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              className="w-full px-3 py-2 rounded-md bg-gray-200"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-600 text-white py-2 px-6 rounded w-full"
          >
            🔍 Find My Agreements
          </button>
        </form>
      )}

      {/*STEP 5 SIGNATURE*/}
      {step === "signature" && (
        <div className="flex flex-col mb-4 w-full max-w-md mx-auto">
          <h3 className="text-sm mb-4">
            Use your finger or stylus to sign on the dotted line below.
          </h3>
          <SignaturePad onSave={handleSaveSignature} clearOnSave={true} />
          <button
            onClick={() => dispatch(setStep("complete"))}
            className="mt-4 bg-red-600 text-white py-2 px-6 rounded"
          >
            ✔️ Submit Claim & Reveal
          </button>
        </div>
      )}

      <div className="flex justify-center mb-4">
        <Image
          src="/assets/claim_value.svg"
          alt="Claim value illustration"
          width={520}
          height={300}
        />
      </div>
    </>
  );
}
