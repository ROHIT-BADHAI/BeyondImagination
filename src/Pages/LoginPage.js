import React from "react";
import "../Styles/index.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="loginContainer">
      <div style={{ marginTop: "10rem", padding: "1rem" }}>
        <form noValidate onSubmit={handleSubmit((data) =>console.log(data) )}>
          <div className="form">
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
            <p style={{color:"red"}}>{errors?.email?.message}</p>
            </div>
            
            <label htmlFor="password">Password</label>
            <div className="inputs">
              <input
                style={{ width: "100%", height: "1.5rem" }}
                {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 4,
                      message: "**Password must be more than 4 characters",
                    },
                  })}
                id="password"
                required
              ></input>
            <p style={{color:"red"}}>{errors?.password?.message}</p>
            </div>
            <div>
              <button
                style={{ width: "100%", height: "2rem", marginTop: "10px" }}
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p style={{ color: "black" }}>
          Not having An Account? <Link to="/signup">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
