"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import http from "@/utils/http-common";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    await http
      .post("/v1/user-register", data)
      .then(() => {
        toast.success("Registration success! Please login.");
        reset();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First Name"
          id="firstName"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
        <Input
          label="Last Name"
          id="lastName"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <Input
          type="password"
          label="Password"
          id="password"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <p className="description">
          The password should be at least eight characters long. To make it
          stronger, use upper and lower case letters, numbers, and symbols like
          ! " ? $ % ^ & )
        </p>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
