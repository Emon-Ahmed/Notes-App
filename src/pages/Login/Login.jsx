import Navbar from "../../components/Navbar";
import { Link } from "react-router";
import InputPassword from "../../components/ui/inputPassword";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter valid email");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="py-10 bg-white border rounded w-96 px-7">
          <form onSubmit={handleLogin}>
            <div className="text-2xl mb-7">Login</div>
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPassword
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Password"}
            />
            {error && <p className="text-red-400">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="mt-4 text-sm text-center">
              Not registered yet?{" "}
              <Link to="/signup" className="font-medium underline text-primary">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
