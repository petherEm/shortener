import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">

          <img src="/images/logo.svg" alt="" />

          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
             {/* Menu 1 */}
             <div className="flex flex-col items-center w-full md:items-start">
                 <div className="mb-5 font-bold text-white capitalize">Features</div>
                 <div className="flex flex-col items-center space-y-3 md:items-start text-grayishViolet hover:text-cyan">
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</Link>
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded links</Link>
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</Link>
                 </div>
             </div>
             {/* Menu 2 */}
             <div className="flex flex-col items-center w-full md:items-start text-grayishViolet hover:text-cyan">
                 <div className="mb-5 font-bold text-white capitalize">Features</div>
                 <div className="flex flex-col items-center space-y-3 md:items-start">
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</Link>
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded links</Link>
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</Link>
                 </div>
             </div>
             {/* Menu 3 */}
             <div className="flex flex-col items-center w-full md:items-start text-grayishViolet hover:text-cyan">
                 <div className="mb-5 font-bold text-white capitalize">Features</div>
                 <div className="flex flex-col items-center space-y-3 md:items-start">
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Link shortening</Link>
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded links</Link>
                     <Link href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</Link>
                 </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
