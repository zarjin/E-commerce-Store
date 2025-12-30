import React from "react";

const ProductCreate = () => {
  return (
    //
    <div className=" relative flex min-h-screen items-center justify-center  p-4 overflow-hidden">
      <div className=" absolute w-full h-full bg-white/25 blur-[160px] z-0" />
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[40px] border border-white/10 bg-[#232729] p-10 shadow-2xl ">
        <div className="absolute -top-20 -left-20 rounded-full bg-blue-500/30 h-64 w-64 blur-[80px] z-0" />
        <div className="absolute -top-20 -right-20 rounded-full bg-blue-600/20 h-64 w-64 blur-[80px] z-0" />

        <div className="relative z-20 flex flex-col items-center">
          <h2 className="mb-8 text-2xl font-bold text-white">Create Product</h2>

          {/* Form Fields */}
          <div className="w-full space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-4 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                placeholder="Short description"
                className="w-full p-4 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 h-24"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-4 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Stock
                </label>
                <input
                  type="number"
                  placeholder="Qty"
                  className="w-full p-4 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Image
              </label>
              <input
                type="file"
                className="w-full p-3 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>

            <button className="w-full mt-4 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
              Create Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
