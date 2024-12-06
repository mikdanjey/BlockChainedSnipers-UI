"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FileUpload } from "@/components/FormHelpers/FileUpload";
import Input from "../FormHelpers/Input";

const CourseVideos = ({ course, params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      video_url: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    if (!data.video_url) {
      toast.error("Please upload video.");
      setIsLoading(false);
      return;
    }

    console.log(data);
    // axios
    //   .post(`/api/courses/${params.courseId}/video`, data)
    //   .then((response) => {
    //     toast.success(response.data.message);
    //     router.refresh();
    //     reset();
    //   })
    //   .catch((error) => {
    //     toast.error("Something went wrong!");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const video_url = watch("video_url");

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <Input
            label="Video Title"
            id="title"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <FileUpload
            control={control}
            label="Course Video"
            name="video_url"
            accept="video/mp4,video/mpeg,video/ogg,video/webm,video/x-msvideo"
          />
          <button type="submit" className="default-btn">
            <i className="flaticon-right-arrow"></i>Upload Video
          </button>
        </div>
      </div>
    </form>
  );
};

export default CourseVideos;
