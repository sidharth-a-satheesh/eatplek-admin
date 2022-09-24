import React, { useRef, useState, useEffect } from "react";
import apis from "../../components/axios/axios";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const navigateHome = () =>{
  //   navigate('/home')
  // }
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("Error");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    try {
      let { data } = await apis.post("admin/login", {
        username: user,
        password: pwd,
      });
      localStorage.setItem("jwt_admin", data.user.token);
      navigate("/home");
    } catch (err) {
      // console.log(err);
      alert("Invalid Credentials!");
      setSuccess(false);
    }
  };

  return (
    <div className="main-login">
      <div className="login-page">
        <div className="form">
          <h1>Admin Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            {/* <button onClick={navigateHome}>login</button> */}
            <button type="submit">{success ? "Logging In..." : "Login"}</button>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
