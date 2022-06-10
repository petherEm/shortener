import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Build your brand recognition and get detailed insights on how your
            links are performing.
          </p>

          <div className="mx-auto lg:mx-0">
            <div className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
              <Link
                href=""
                
              >
                Get Started
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/images/illustration-working.svg"
              className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
