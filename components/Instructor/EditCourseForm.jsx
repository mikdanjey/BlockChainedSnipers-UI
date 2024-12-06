"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import Input from "../FormHelpers/Input";
import SetPrice from "../FormHelpers/SetPrice";
import CategorySelect from "../FormHelpers/CategorySelect";
import SubscriptionSelect from "../FormHelpers/SubscriptionSelect";
import { FileUpload } from "@/components/FormHelpers/FileUpload";

const EditCourseForm = ({ course, params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
      title: "",
      description: "",
      regular_price: "",
      before_price: "",
      lessons: "",
      duration: "Test",
      image: "",
      access_time: "",
      subscriptions: "",
      requirements: "",
      what_you_will_learn: "",
      who_is_this_course_for: "",
    },
  });

  useEffect(() => {
    setValue("title", course[0].title);
    setValue("category", course[0].category);
    setValue("description", course[0].description);
    setValue("regular_price", course[0].regular_price);
    setValue("before_price", course[0].before_price);
    setValue("lessons", course[0].lessons);
    setValue("duration", "Test");
    setValue("image", course[0].image);
    setValue("access_time", course[0].access_time);
    setValue("subscriptions", course[0].subscriptions);
    setValue("requirements", course[0].requirements);
    setValue("what_you_will_learn", course[0].what_you_will_learn);
    setValue("who_is_this_course_for", course[0].who_is_this_course_for);
  }, [course]);

  const regular = watch("regular_price");
  const before = watch("before_price");
  const category = watch("category");
  const subscriptions = watch("subscriptions");
  const image = watch("image");

  const onSubmit = (data) => {
    setIsLoading(true);
    if (!data.image) {
      toast.error("Please drop image 750x500 before submitting.");
      setIsLoading(false);
      return;
    }
    axios
      .put(`/api/courses/${params.courseId}`, data)
      .then((response) => {
        toast.success(response.data.message);
        router.push("/instructor/courses");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
        <div className="col-md-6">
          <Input
            label="Course Title"
            id="title"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
        </div>
        <div className="col-md-6">
          <CategorySelect
            value={category}
            onChange={(value) => setCustomValue("category", value)}
            label="Category"
          />
        </div>

        <div className="col-md-6">
          <SubscriptionSelect
            value={subscriptions}
            onChange={(value) => setCustomValue("subscriptions", value)}
            label="Subscriptions"
          />
        </div>

        <div className="col-md-6">
          <FileUpload
            control={control}
            label="Thumbnail Upload"
            name="thumbnail"
          />
        </div>

        <div className="col-md-6">
          <FileUpload control={control} label="Image Upload" name="image" />
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">Overview</label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RichTextEditor
                  controls={[
                    ["bold", "italic", "underline", "link"],
                    ["unorderedList", "h1", "h2", "h3"],
                    ["alignLeft", "alignCenter", "alignRight"],
                  ]}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="default-btn">
            <i className="flaticon-right-arrow"></i>Update Course <span></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCourseForm;
