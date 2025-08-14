"use client";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-black h-16 flex items-center justify-between px-4 w-full">
        <div className="flex items-center">
          <Image
            src="/assets/pcp-pal.svg"
            alt="PCPPal Logo"
            width={100}
            height={32}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/assets/trustpilot.svg"
            alt="Trustpilot Rating"
            width={80}
            height={80}
          />
          <Image
            src="/assets/SSL.svg"
            alt="SSL Secured"
            width={80}
            height={80}
          />
        </div>
      </header>

      <div className="w-full bg-white">
        <Image
          src="/assets/banner.svg"
          alt="Promotional Banner"
          width={1000}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
