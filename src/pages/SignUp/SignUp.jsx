import { Link } from "react-router";
import Navbar from "../../components/Navbar";
import InputPassword from "../../components/ui/inputPassword";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter name");
      return;
    }
    if (!email) {
      setError("Please enter a valid email");
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
          <form onSubmit={handleSignUp}>
            <div className="text-2xl mb-7">Sign Up</div>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Create Account
            </button>
            <p className="mt-4 text-sm text-center">
              Already Have An Account?{" "}
              <Link to="/login" className="font-medium underline text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
