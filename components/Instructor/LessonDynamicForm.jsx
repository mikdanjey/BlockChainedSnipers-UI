import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Preloader from "@/components/_App/Preloader";
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
import { FileUpload } from "@/components/FormHelpers/FileUpload";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Lesson title is mandatory.",
  }),
  fileURL: z.any(),
  orderNumber: z.string().min(1, {
    message: "Order Number is mandatory.",
  }),
});

export function LessonDynamicForm({
  courseId,
  index,
  title,
  fileKey,
  id,
  selectedChapter,
  onDelete,
}) {
  const [lessonId, setLessonId] = useState(id);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [show, setShow] = useState(false);
  const handleDelete = () => setShow(true);
  const handleClose = () => setShow(false);

  const router = useRouter();

  const { handleSubmit, control, reset, getFieldState, formState } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title,
      fileURL: "",
      orderNumber: index + 1 + "",
    },
  });

  const { isSubmitting, errors } = formState;

  async function onSubmit(values) {
    if (!lessonId) {
      // new data
      try {
        const formData = new FormData();
        formData.append("fileURL", values.fileURL);
        formData.append("title", values.title);
        formData.append("courseId", courseId);
        formData.append("chapterId", selectedChapter);
        formData.append("orderNumber", values.orderNumber);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            console.log(
              `Loaded: ${progressEvent.loaded}, Total: ${progressEvent.total}`,
            );
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploadProgress(percentCompleted);
          },
        };
        const { data } = await http.post(
          "/v1/lessons?courseId=" + courseId,
          formData,
          config,
        );
        setLessonId(data._id);
        setUploadProgress(0);
        router.refresh();
        toast.success("Chapter added Successfully");
      } catch (error) {
        setUploadProgress(0);
        toast.error("Chapter not added");
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("fileURL", values.fileURL);
        formData.append("title", values.title);
        formData.append("courseId", courseId);
        formData.append("chapterId", selectedChapter);
        formData.append("orderNumber", values.orderNumber);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            console.log(
              `Loaded: ${progressEvent.loaded}, Total: ${progressEvent.total}`,
            );
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploadProgress(percentCompleted);
          },
        };
        const { data } = await http.put(
          "/v1/lessons/" + lessonId + "?courseId=" + courseId,
          formData,
          config,
        );
        setUploadProgress(0);
        router.refresh();
        toast.success("Chapter updated Successfully");
      } catch (error) {
        toast.error("Chapter not updated");
      }
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
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <FormField
                  control={control}
                  name="orderNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="orderNumber">Order</FormLabel>
                      <FormControl>
                        <Input id="orderNumber" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-lg-10 col-md-12">
                <FormField
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="title">Title</FormLabel>
                      <FormControl>
                        <Input id="title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Button type="submit" disabled={isSubmitting}>
                  <i className="flaticon-right-arrow" />
                  {lessonId ? "Update" : "Create"}
                  <span></span>
                </Button>{" "}
                {isSubmitting && (
                  <Preloader>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <p>
                        <b>Uploading:</b> {uploadProgress}%
                      </p>
                    )}
                    {uploadProgress >= 100 && (
                      <p>
                        <b>Processing ...</b>
                      </p>
                    )}
                  </Preloader>
                )}
                {/* <Button type="button" variant="secondary" onClick={onReset}>
                                Reset<span></span>
                            </Button> */}
              </div>
              <div className="col-lg-6 text-end">
                {lessonId && (
                  <Button type="button" onClick={handleDelete}>
                    <i className="flaticon-right-arrow" />
                    Delete
                    <span></span>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <FileUpload
              control={control}
              className="fileUploder"
              label="Video Upload"
              name="fileURL"
              accept={{ "video/*": [".mp4", ".avi"] }}
              userIndication={
                <div className="text-center">Click to upload</div>
              }
            />
            {fileKey && (
              <p>
                <b>Video Path:</b> {fileKey}
              </p>
            )}
            {uploadProgress > 0 && (
              <p>
                <b>Uploading:</b> {uploadProgress}%
              </p>
            )}
            {errors.fileURL && <p>{errors.fileURL.message}</p>}
          </div>
        </div>
        <Modal
          show={show}
          size="sm"
          centered
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Chapter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure want to delete the Chapter {title} ?
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-lg-5">
                <Button type="button" variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-5">
                <Button type="button" variant="primary" onClick={onDelete}>
                  Delete
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </Form>
  );
}
