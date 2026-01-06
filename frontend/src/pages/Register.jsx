import { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/features/authSlice.js";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profile: null,
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    if (e.target.name === "profile") {
      setUser({ ...user, [e.target.name]: e.target.files[0] });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    if (user.profile) {
      formData.append("profile", user.profile);
    }

    dispatch(register(formData));
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden">
      <div className="absolute w-full h-full bg-white/25 blur-[160px] z-0" />

      <div className="relative z-10 w-full max-w-md rounded-[40px] border border-white/10 bg-[#232729] p-10 shadow-2xl">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-500/30 blur-[80px]" />
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />

        <div className="relative z-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Profile
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="profile"
                className="w-full p-3 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="you@example.com"
                className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-4 rounded-xl bg-blue-600 font-bold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-500/20"
            >
              {loading ? "...loading" : "Create Account"}
            </button>
          </form>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
