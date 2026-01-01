import Button from "../components/Button";
export default function Product() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-8">
      <div className="Products grid grid-cols-3 gap-4 p-4">
        <div className="productCard border p-4 rounded-lg shadow-md space-y-6">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2 className="text-xl font-semibold mb-2">Product 1</h2>
          <p className="text-gray-600">$19.99</p>
          <Button buttonName={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
}
