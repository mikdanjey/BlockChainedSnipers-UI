"use client";

import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/primitives/button";
import { FileUpload } from "@/components/FormHelpers/FileUpload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/primitives/form";
import { Input } from "@/primitives/input";
import http from "@/utils/http-common";
import DeleteButton from "./DeleteButton";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "firstName is mandatory.",
  }),
  lastName: z.string().min(1, {
    message: "lastName is mandatory.",
  }),
  phoneNumber: z
    .string({
      message: "phoneNumber is mandatory.",
    })
    .optional(),
  email: z
    .string({
      message: "email is mandatory.",
    })
    .optional(),
  gender: z
    .string({
      message: "gender is mandatory.",
    })
    .optional(),
  address: z
    .string({
      message: "address is mandatory.",
    })
    .optional(),
  country: z
    .string({
      message: "country is mandatory.",
    })
    .optional(),
  occupation: z
    .string({
      message: "occupation is mandatory.",
    })
    .optional(),
  eduQualification: z
    .string({
      message: "education is mandatory.",
    })
    .optional(),
  profileImage: z.any(),
});

const UpdateProfileForm = ({ currentUser = {}, userType = "User" }) => {
  const router = useRouter();

  const {
    firstName = "",
    lastName = "",
    email = "",
    phoneNumber = "",
    gender = "",
    address = "",
    country = "",
    occupation = "",
    eduQualification = "",
    profileImage = "",
  } = currentUser;

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        address,
        country,
        occupation,
        eduQualification,
        profileImage: "",
      },
    });

  const { isSubmitting } = formState;

  async function onSubmit(values) {
    try {
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("gender", values.gender);
      formData.append("address", values.address);
      formData.append("country", values.country);
      formData.append("occupation", values.occupation);
      formData.append("eduQualification", values.eduQualification);
      formData.append("profileImage", values.profileImage);
      const { data } = await http.post(
        userType === "Admin" || userType === "Employee"
          ? "/v1/admin-profile"
          : "/v1/user-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      localStorage.setItem("loginUser", JSON.stringify(values));
      toast.success("Profile updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  async function handleProfileImage() {
    try {
      const formData = new FormData();
      formData.append("profileImageDelete", true);
      const { data } = await http.post(
        userType === "Admin" || userType === "Employee"
          ? "/v1/admin-profile"
          : "/v1/user-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      toast.success("Profile image deleted");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
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
          <div className="col-md-6">
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <FormControl>
                    <Input id="firstName" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-md-6">
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <FormControl>
                    <Input id="lastName" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                  <FormControl>
                    <Input id="phoneNumber" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <FormControl>
                    <select {...field} className="form-control">
                      <option value="">Select a Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <FormControl>
                    <Input id="address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <FormControl>
                    <Input id="country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="occupation">Occupation</FormLabel>
                  <FormControl>
                    <Input id="occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="eduQualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="eduQualification">Education</FormLabel>
                  <FormControl>
                    <Input id="eduQualification" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-md-12">
            <FileUpload
              control={control}
              label="Profile Image"
              name="profileImage"
            />
          </div>

          {profileImage && (
            <div className="row">
              <div className="col-3" style={{ marginBottom: 10 }}>
                <div className="card">
                  <img
                    src={profileImage}
                    width={250}
                    alt="Profile Image"
                    className="img-thumbnail"
                  />
                  <div className="card-body" style={{}}>
                    <h6 className="card-title">Profile Image</h6>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={handleProfileImage}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-12">
            <Button type="submit" disabled={isSubmitting}>
              <i className="flaticon-right-arrow" />
              Update Profile<span></span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UpdateProfileForm;
