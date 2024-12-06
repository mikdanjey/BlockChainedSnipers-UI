"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/primitives/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/primitives/form";
import { Input } from "@/primitives/input";
import toast from "react-hot-toast";
import http from "@/utils/http-common";

const formSchema = z.object({
  oldPassword: z.string().min(1, {
    message: "Current Password is mandatory.",
  }),
  newPassword: z.string().min(1, {
    message: "New Password is mandatory.",
  }),
  confirmPassword: z.string().min(1, {
    message: "Confirm Password is mandatory.",
  }),
});

export function ResetPasswordForm({ userType }) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const userId = searchParams.get("userId");
  const resetToken = searchParams.get("resetToken");

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    });

  const { isSubmitting } = formState;

  async function onSubmit(values) {
    try {
      const { data } = await http.post("/v1/user-reset-password", {
        ...values,
        resetToken,
      });
      toast.success("Password Change Success, Please try to login");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  function onReset() {
    reset();
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      getFieldState={getFieldState}
      formState={formState}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="">
            <FormField
              control={control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="oldPassword">Current Password</FormLabel>
                  <FormControl>
                    <Input id="oldPassword" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="row">
          <div className="">
            <FormField
              control={control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="newPassword">New Password</FormLabel>
                  <FormControl>
                    <Input id="newPassword" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="row">
          <div className="">
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input id="confirmPassword" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap"></div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <Link href="/login" className="lost-your-password">
              Back to Login
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Button type="submit" disabled={isSubmitting}>
              <i className="flaticon-right-arrow" />
              Update Password<span></span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
