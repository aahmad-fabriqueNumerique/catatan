import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

import { emailValidation } from "../../utils/helper";
import PasswordInput from "../../components/Input/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(e);

    if (!emailValidation(email)){
      setError("Adresse mail non valide")
      return;
    }

    if(!password) {
      setError("mot de passe incorrect")
      return;
    }
    setError("")

    //Login API call

  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h3 className="text-2xl mb-7">Login</h3>

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-xs pb-1">{error}</p> }
            <button className="btn-primary" type="submit">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              toujours pas inscrit? {""}
              <Link to="/signup" className="font-medium text-primary underline">
                Créer un compte maintenant
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
