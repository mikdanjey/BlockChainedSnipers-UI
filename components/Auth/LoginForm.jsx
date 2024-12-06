"use client";

import React, { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../FormHelpers/Input";

const LoginForm = ({ userType = "Student" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      ...data,
      userType,
      redirect: false, // Prevents redirecting and allows us to handle the response in the client
    });
    if (!result.error) {
      const session = await getSession();
      const { accessToken, user } = session;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("loginUser", JSON.stringify(user));
      setIsLoading(false);
      router.push(
        userType === "Admin" || userType === "Employee"
          ? "/admin"
          : "/learning/dashboard",
      );
      router.refresh();
      toast.success("Logged in");
    } else {
      // Handle sign-in failure
      setIsLoading(false);
      console.error(result.error);
      toast.error(result.error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          id="email"
          type="email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          label="Password"
          id="password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
            <p>
              <input type="checkbox" id="test2" />
              <label htmlFor="test2">Remember me</label>
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <Link href="/forgotPassword" className="lost-your-password">
              Lost your password?
            </Link>
          </div>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
