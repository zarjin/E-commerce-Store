import { Link } from "react-router";
export default function Register() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="form w-fit h-fit p-8 bg-[#00aaff20] border  rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Register</h2>

        <form className="space-y-5">
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium ">
              Name
            </label>
            <div className="w-64 h-10 border-2 border-blue-400 rounded-2xl overflow-hidden ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full h-full outline-none px-3"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium ">
              Email
            </label>
            <div className="w-64 h-10 border-2 border-blue-400 rounded-2xl overflow-hidden ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                className="w-full h-full outline-none px-3"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" Gen className="text-sm font-medium ">
              Password
            </label>
            <div className="w-64 h-10 border-2 border-blue-400 rounded-2xl overflow-hidden ">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full h-full outline-none px-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors"
          >
            Create Account
          </button>
        </form>
        <div className="flex items-center space-x-2.5 mt-2.5">
          {" "}
          <h1> already have an account? </h1>
          <Link to={"/login"}>
            <span className="font-semibold text-[#00AEEF]">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
