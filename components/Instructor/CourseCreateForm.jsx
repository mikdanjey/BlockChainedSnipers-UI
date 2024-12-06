"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
// import { RichTextEditor } from '@mantine/rte';
import toast from "react-hot-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import { Input } from "@/primitives/input";
import { Textarea } from "@/primitives/textarea";
import SetPrice from "../FormHelpers/SetPrice";
import CategorySelect from "../FormHelpers/CategorySelect";
import { useSelector, useDispatch } from "react-redux";
import { FileUpload } from "@/components/FormHelpers/FileUpload";
import { Select } from "@/primitives/select";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { setQuickReferenceURL } from "@/redux/slices/quickReferenceSlice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/primitives/form";
import http from "@/utils/http-common";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Course Name is mandatory.",
  }),
  description: z.string().min(1, {
    message: "Coures Description is mandatory.",
  }),
  category: z.string().min(1, {
    message: "Category is mandatory.",
  }),
  subscriptions: z
    .array(z.string().min(1, { message: "Subscription is mandatory." }))
    .min(1, { message: "Subscription is mandatory." }),
  overview: z
    .string({
      message: "overview is mandatory.",
    })
    .optional(),
  thumbnailImage: z.any(),
  bannerImage: z.any(),
});

const CourseCreateForm = ({
  currentUser,
  course = {},
  action = "ADD",
  categories = [],
  subscriptionList = [],
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    name = "",
    description = "",
    category = "",
    subscriptions = [],
    overview = "",
    thumbnailImage = "",
    bannerImage = "",
  } = course;

  const {
    register,
    handleSubmit,
    getFieldState,
    formState,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      description,
      category,
      subscriptions,
      overview,
      thumbnailImage,
      bannerImage,
    },
  });

  const [show, setShow] = useState(false);
  const showDeleteModal = () => setShow(true);
  const closeDeleteModal = () => setShow(false);

  const [editShow, setEditShow] = useState(false);
  const showEditModal = () => setEditShow(true);
  const closeEditModal = () => setEditShow(false);

  const dispatch = useDispatch();

  // const { categories } = useSelector(state => state.quickReference);

  async function onSubmit(values) {
    const { category } = values;

    // dispatch(setQuickReferenceURL([category]));
    
    if (action === "EDIT") {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("category", values.category);
        formData.append("overview", values.overview);
        formData.append("subscriptions", JSON.stringify(values.subscriptions));
        formData.append("bannerImage", values.bannerImage);
        formData.append("thumbnailImage", values.thumbnailImage);
        await http.put(`/v1/courses/${course._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Course Updated Successfully");
        router.push(`/instructor/course/${course._id}/chapters`);
      } catch (error) {
        const data = error.response?.data;
        console.log("error data", data);
        if (data?.message) {
          toast.error(data?.message);
        } else if (data?.errors) {
          toast.error("Unsupported file");
        } else {
          toast.error("Unexpected error. Please try again");
        }
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("category", values.category);
        formData.append("overview", values.overview);
        formData.append("subscriptions", JSON.stringify(values.subscriptions));
        formData.append("bannerImage", values.bannerImage);
        formData.append("thumbnailImage", values.thumbnailImage);
        const { data } = await http.post("/v1/courses", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Course Created Successfully");
        router.push(`/instructor/course/${data._id}/chapters`);
      } catch (error) {
        const data = error.response?.data;
        console.log("error data", data);
        if (data?.message) {
          toast.error(data?.message);
        } else if (data?.errors) {
          toast.error("Unsupported file");
        } else {
          toast.error("Unexpected error. Please try again");
        }
      }
    }
  }

  async function handleThumbnailImageDelete() {
    try {
      const formData = new FormData();
      formData.append("thumbnailImageDelete", true);
      await http.put(`/v1/courses/${course._id}`, formData);
      toast.success("Thumbnail image deleted.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  async function handleBannerImageDelete() {
    try {
      const formData = new FormData();
      formData.append("bannerImageDelete", true);
      await http.put(`/v1/courses/${course._id}`, formData);
      toast.success("Banner image deleted.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  async function handleDelete() {
    try {
      await http.delete("/v1/courses/" + course._id);
    } catch (error) { }
    router.push(`/instructor/courses`);
    toast.success("Course Deleted Successfully");
  }

  function handleEdit() {
    // Add code here
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      getFieldState={getFieldState}
      formState={formState}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Course Name</FormLabel>
                  <FormControl>
                    <Input id="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Textarea id="description" rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="select-box">
              <FormField
                control={control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <FormControl>
                      <select {...field} className="form-select form-control">
                        <option value="">Select a Category</option>
                        {categories.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="col-md-6">
            <FormField
              control={control}
              name="subscriptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="subscriptions">Subscriptions</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      id="subscriptions"
                      isMulti={true}
                      options={subscriptionList.map((option) => ({
                        value: option._id,
                        label: option.name,
                      }))}
                      value={subscriptionList
                        .filter((option) => field.value?.includes(option._id))
                        .map((option) => ({
                          value: option._id,
                          label: option.name,
                        }))}
                      onChange={(selectedOptions) =>
                        field.onChange(
                          selectedOptions.map((option) => option.value),
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <FileUpload
              control={control}
              label="Thumbnail image"
              name="thumbnailImage"
            />
            {thumbnailImage && (
              <div className="row">
                <div className="col" style={{ marginBottom: 10 }}>
                  <div className="card">
                    <img
                      src={thumbnailImage}
                      alt="thumbnailImage"
                      className="img-thumbnail"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{ marginRight: 10 }}>Thumbnail Image</span>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={handleThumbnailImageDelete}
                      >
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col-md-6">
            <FileUpload
              control={control}
              label="Banner image"
              name="bannerImage"
            />
            {bannerImage && (
              <div className="row">
                <div className="col" style={{ marginBottom: 10 }}>
                  <div className="card">
                    <img
                      src={bannerImage}
                      alt="bannerImage"
                      className="img-thumbnail"
                    />
                    <div className="card-body">
                      <span className="card-title" style={{ marginRight: 10 }}>Banner Image</span>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={handleBannerImageDelete}
                      >
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="form-group">
              <label className="form-label fw-semibold">Overview</label>
              <Controller
                name="overview"
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
        </div>

        {/* <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">Requirements</label>
            <Controller
              name="requirements"
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
        </div> */}

        {/* <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">
              What You Will Learn
            </label>
            <Controller
              name="what_you_will_learn"
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
        </div> */}

        {/* <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">
              Who is this course for?
            </label>
            <Controller
              name="who_is_this_course_for"
              control={control}
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
        </div> */}

        <div className="row">
          <div className="col-4">
            <Button type="submit">
              <i className="flaticon-right-arrow"></i>
              {action === "EDIT" ? "Update Course " : "Create Course "}
            </Button>
          </div>
          <div className="col-4" />
          <div className="col-4 text-end">
            {action === "EDIT" && (
              <Button type="button" onClick={showDeleteModal}>
                <i className="flaticon-right-arrow"></i>Delete Course
              </Button>
            )}
          </div>
        </div>
        <Modal
          show={show}
          size="sm"
          centered
          onHide={closeDeleteModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure want to delete the course {name}?
            <p className="mt-20">
              Note: All the modules and chapters will also get deleted.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-lg-5 col-md-5 text-start">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </Button>
              </div>
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-5 col-md-5">
                <Button type="button" variant="primary" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal
          show={editShow}
          size="sm"
          centered
          onHide={closeEditModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure want to update the course {name} details?
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-lg-5 col-md-5 text-start">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={closeEditModal}
                >
                  Cancel
                </Button>
              </div>
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-5 col-md-5">
                <Button type="button" variant="primary" onClick={handleEdit}>
                  Delete
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </Form>
  );
};

export default CourseCreateForm;
