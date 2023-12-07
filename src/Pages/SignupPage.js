import React, { useEffect } from "react";
import "../Styles/index.css";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../Context/authContext";
function SignupPage() {
  const { signUp } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { userInfo } = useAuthContext();
  useEffect(() => console.log(userInfo), [userInfo]);
  return (
    <>
      {userInfo && <Navigate to="/" />}
      <div className="loginContainer">
        <div style={{ marginTop: "10rem", padding: "1rem",width:"20rem" }}>
          <div style={{width:"70%",marginLeft:"3rem"}} className="logo">🦄DataGram</div>
          <form noValidate onSubmit={handleSubmit((data) => signUp(data))}>
            <div className="form" >
              <label htmlFor="email">Name</label>
              <div className="inputs">
                <input
                  style={{ width: "100%", height: "1.5rem" }}
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Name required",
                  })}
                  required
                ></input>
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              </div>
              <label htmlFor="email">Email Address</label>
              <div className="inputs">
                <input
                  style={{ width: "100%", height: "1.5rem" }}
                  id="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                      message: "Invalid Email Id",
                    },
                  })}
                  type="email"
                  required
                ></input>
                <p style={{ color: "red" }}>{errors?.email?.message}</p>
              </div>
              <label htmlFor="password">Password</label>
              <div className="inputs">
                <input
                  style={{ width: "100%", height: "1.5rem" }}
                  id="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 4,
                      message: "**Password must be more than 4 characters",
                    },
                  })}
                  required
                ></input>
                <p style={{ color: "red" }}>{errors?.password?.message}</p>
              </div>
              <div>
                <button
                  style={{ width: "100%", height: "2rem", marginTop: "10px",backgroundColor:"var(--button-color)",cursor:"pointer" }}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          {/* <p style={{ color: "black", alignItems: "center" }}>
            Already have an Account? <Link to="/login">Login</Link>
          </p> */}
        </div>
      </div>
    </>
  );
}

export default SignupPage;
