"use client";

import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

type SignaturePadProps = {
  onSave: (dataUrl: string) => void;
  clearOnSave?: boolean; // add this prop
};

export default function SignaturePad({
  onSave,
  clearOnSave = false,
}: SignaturePadProps) {
  const sigCanvasRef = useRef<SignatureCanvas>(null);

  const clear = () => sigCanvasRef.current?.clear();

  const save = () => {
    if (sigCanvasRef.current && !sigCanvasRef.current.isEmpty()) {
      const dataUrl = sigCanvasRef.current.toDataURL();
      onSave(dataUrl);

      if (clearOnSave) {
        clear();
      }
    } else {
      alert("Please provide a signature before saving.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <SignatureCanvas
        ref={sigCanvasRef}
        penColor="black"
        canvasProps={{
          className: "w-full h-40 border border-gray-300 rounded",
        }}
        backgroundColor="white"
        minWidth={1}
        maxWidth={3}
      />
      <div className="flex gap-2 mt-4">
        <button onClick={clear} className="btn btn-secondary">
          Clear
        </button>
        <button onClick={save} className="btn btn-primary">
          Save Signature
        </button>
      </div>
    </div>
  );
}
