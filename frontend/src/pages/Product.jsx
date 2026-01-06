import { useEffect } from "react";
import Button from "../components/Button";
import { getAllProduct } from "../redux/features/productSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const { allProduct, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (!allProduct.length) {
    return <p className="text-center mt-10">No products found.</p>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-8">
      <div className="Products grid grid-cols-3 gap-4 p-4">
        {allProduct.map((items) => (
          <div
            key={items._id}
            className="productCard border p-4 rounded-lg shadow-md space-y-6"
          >
            <img src={items.image} alt={items.name} />
            <h2 className="text-xl font-semibold">{items.name}</h2>
            <p className="text-gray-600">{items.price}</p>
            <Button buttonName="Add to Cart" />
          </div>
        ))}
      </div>
    </div>
  );
}
