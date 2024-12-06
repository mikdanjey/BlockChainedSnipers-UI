"use client";

import React, { useState } from "react";
import http from "@/utils/http-common";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../FormHelpers/Input";

const ForgotPasswordForm = ({ userType = "Student" }) => {
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
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    await http
      .post("/v1/user-forgot-password", values)
      .then(() => {
        toast.success("Reset Link sent to your email!!");
        // reset();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-form">
      <h2>Forgot Password ?</h2>

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

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap"></div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <Link href="/login" className="lost-your-password">
              Remember My Password
            </Link>
          </div>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
