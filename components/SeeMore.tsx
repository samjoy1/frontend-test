"use client";
import Image from "next/image";
import { useState } from "react";

export default function SeeMore() {

    const [showFAQ, setShowFAQ] = useState(false);
  return (
    <>     
       <div
                 className="bg-black py-6 flex justify-center mt-6"
                 style={{
                   marginLeft: "-1.5rem",
                   marginRight: "-1.5rem",
                   width: "calc(100% + 3rem)",
                 }}
               >
                 <div className="max-w-md w-full px-6 mx-auto text-center">
                   <h2 className="text-xl text-gray-100 mb-6">
                     We will locate all of your vehicle finance agreements with all
                     these 73 lenders.
                   </h2>
       
                   <div className="flex flex-col space-y-3">
                     <button className="bg-gray-200 text-black w-full py-2 rounded-md font-bold">
                       View lenders
                     </button>
       
                     {!showFAQ ? (
                       <button
                         className="bg-zinc-600 text-white w-full py-2 rounded-md font-bold"
                         onClick={() => setShowFAQ(true)}
                       >
                         See more about pcp
                       </button>
                     ) : (
                       <button
                         className="bg-zinc-800 text-white w-full py-2 rounded-md font-bold"
                         onClick={() => setShowFAQ(false)}
                       >
                         Hide info
                       </button>
                     )}
                   </div>
       
                   
                   {showFAQ && (
                     <div className="mt-6 text-left text-sm text-gray-300">
                       <div className="w-full bg-white">
                         <Image
                           src="/assets/faq1.svg"
                           alt="faq1"
                           width={1000}
                           height={100}
                           className="w-full h-auto"
                         />
                       </div>
                       <div className="w-full bg-white">
                         <Image
                           src="/assets/faq2.svg"
                           alt="faq2"
                           width={1000}
                           height={100}
                           className="w-full h-auto"
                         />
                       </div>
                       <div className="w-full bg-white">
                         <Image
                           src="/assets/faq3.svg"
                           alt="faq3"
                           width={1000}
                           height={100}
                           className="w-full h-auto"
                         />
                       </div>
                       <div className="flex justify-center py-4">
                         <Image
                           src="/assets/find-my-agreements.svg"
                           alt="find my agreements"
                           width={500}
                           height={300}
                         />
                       </div>
                     </div>
                   )}
                 </div>
               </div>
    </>
  );
}
