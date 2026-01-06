import { useDispatch } from "react-redux";
import { createProduct } from "../redux/features/productSlice.js";
import { useState } from "react";

const ProductCreate = () => {
  const [Product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("name", Product.name);
    fromData.append("description", Product.description);
    fromData.append("price", Product.price);
    fromData.append("stock", Product.stock);
    fromData.append("category", Product.category);
    fromData.append("image", Product.image);
    dispatch(createProduct(fromData));
  };

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
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                onChange={(e) => {
                  setProduct((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                type="text"
                name="name"
                placeholder="Product Name"
                className="w-full p-4 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setProduct((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
                name="description"
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
                  onChange={(e) => {
                    setProduct((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }));
                  }}
                  name="price"
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
                  onChange={(e) => {
                    setProduct((prev) => ({
                      ...prev,
                      stock: e.target.value,
                    }));
                  }}
                  name="stock"
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
                onChange={(e) => {
                  setProduct((prev) => ({
                    ...prev,
                    image: e.target.files[0],
                  }));
                }}
                name="image"
                type="file"
                className="w-full p-3 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Category
              </label>
              <select
                name="category"
                onChange={(e) => {
                  setProduct((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }));
                }}
                className="w-full p-3 text-sm bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Garden</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              Create Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
