function Profile() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className=" relative bg-white/5 p-8 rounded-lg shadow-lg backdrop-blur-3xl">
        <div className=" absolute w-40 h-4" />

        <div className="flex flex-col items-center gap-4">
          <div className="profileImage w-24 h-24 rounded-full overflow-hidden border-4 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">John Doe</h2>
            <p className="text-white/70">Software Engineer at TechCorp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
