"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white text-center py-6">
        <div className="flex justify-center space-x-4">
          <p className="text-sm underline">Terms and conditions</p>
          <p className="text-sm underline">Complaints Procedure</p>
          <p className="text-sm underline">Privacy Policy</p>
        </div>
      </footer>
    </>
  );
}
