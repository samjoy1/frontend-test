"use client";
import Image from "next/image";

export default function BottomHalf() {
  return (
    <>
      <div className="flex justify-left py-4">
        <Image
          src="/assets/SRAlogo.svg"
          alt="SRA Logo"
          width={110}
          height={100}
        />
      </div>
      <p className="text-sm text-gray-700 mb-8">
        PCP Pal is a trading style of Courmacs Legal Limited. Registered in
        England and Wales, Company No. 13185687 Authorised and regulated by the
        Solicitors Regulation Authority (SRA) - SRA Reg No: 819044 Registered
        with the information Commisioner‘s Office(ICO) - ICO Reg No: ZA886741.
      </p>

      <p className="text-sm text-gray-700 mb-8">
        The outcome of your claim will depend on the specific circumstances of
        your case. Results may vary, and past performance does not indicate
        future outcomes.
      </p>

      <p className="text-sm text-gray-700 mb-8">
        *5,318.25 is the average claim as of 29/05/2024. *10,446.46 is the most
        significant claim value as of 29/05/2024. *Based on industry research;
        industry results may vary.
      </p>

      <p className="text-sm font-bold text-gray-700">Privacy and Complaints</p>

      <p className="text-sm text-gray-700 mb-8">
        By submitting a claim, you consent to Courmacs Legal Limited processing
        your data in accordance with our Privacy Policy. For concerns, please
        review our Complaints Procedure.
      </p>

      <p className="text-sm text-gray-700 mb-8">
        The agreements identified are subject to verification. This means that
        while agreements may be initially detected, they must go through a
        verification process to confirm eligibility.
      </p>
    </>
  );
}
