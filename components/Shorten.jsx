import React from "react";

const Shorten = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
          <input
            placeholder="Shorten a link here"
            id="link-input"
            type="text"
            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
          />
          <button className="px-10 py-3 text-white bg-cyan rounded-lg bg-cyan-light focus:outline-none md:py-2">
                Shorten it!
          </button>

        </form>

        {/* Link 1 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center text-veryDarkViolet md:text-left">
                    https://frontendmentor.io
                </p>
                <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                    <div className="font-bold text-cyan">
                        https://rel.ink/k3211
                    </div>
                    <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                        Copy
                    </button>
                </div>
        </div>
        {/* Link 2 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center text-veryDarkViolet md:text-left">
                    https://frontendmentor.io
                </p>
                <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                    <div className="font-bold text-cyan">
                        https://rel.ink/k3211
                    </div>
                    <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                        Copy
                    </button>
                </div>
        </div>
        {/* Link 3 */}
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center text-veryDarkViolet md:text-left">
                    https://frontendmentor.io
                </p>
                <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                    <div className="font-bold text-cyan">
                        https://rel.ink/k3211
                    </div>
                    <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                        Copy
                    </button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Shorten;
