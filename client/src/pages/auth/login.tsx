function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-8">
          CloudWise AI
        </h1>

        <input
          className="border w-full p-3 rounded-lg mb-4"
          placeholder="Email"
        />

        <input
          className="border w-full p-3 rounded-lg mb-6"
          type="password"
          placeholder="Password"
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded-lg">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;