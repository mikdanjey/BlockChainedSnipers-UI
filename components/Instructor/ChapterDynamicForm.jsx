import React, { useState, useEffect } from "react";

import * as z from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
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
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Chapter Name is mandatory.",
  }),
  description: z
    .string({
      message: "Description is mandatory.",
    })
    .optional(),
  orderNumber: z.string().min(1, {
    message: "Order Number is mandatory.",
  }),
});

export function ChapterDynamicForm({
  index,
  name,
  description,
  orderNumber,
  courseId,
  id,
  onDelete,
}) {
  const [chapterId, setChapterId] = useState(id);
  const [show, setShow] = useState(false);
  const handleDelete = () => setShow(true);
  const handleClose = () => setShow(false);
  const router = useRouter();

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name,
        description,
        orderNumber: index + 1 + "",
      },
    });

  const { isSubmitting } = formState;

  async function onSubmit(values) {
    console.log(values);
    if (!chapterId) {
      // new data
      try {
        const { data } = await http.post("/v1/chapters", {
          ...values,
          course: courseId,
        });
        toast.success("Module added Successfully");
        setChapterId(data._id);
      } catch (error) {}
    } else {
      try {
        const { data } = await http.put("/v1/chapters/" + chapterId, {
          ...values,
          course: courseId,
        });
        toast.success("Module updated Successfully");
      } catch (error) {}
    }
  }

  function onReset() {
    reset();
  }

  function handleGotoLesson(chapterId) {
    const pathname = `/instructor/course/${courseId}/lessons?chapterId=${chapterId}`;
    router.push(pathname);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      getFieldState={getFieldState}
      formState={formState}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-1 col-md-12">
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

          <div className="col-lg-5 col-md-12">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormControl>
                    <Input id="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-lg-12 col-md-12 d-none">
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Input id="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-lg-2 col-md-6 mt-40">
            <Button type="submit" disabled={isSubmitting}>
              <i className="flaticon-right-arrow" />
              {chapterId ? "Update" : "Create"}
              <span></span>
            </Button>{" "}
            {/* <Button type="button" variant="secondary" onClick={onReset}>
                            Reset<span></span>
                        </Button> */}
          </div>

          <div className="col-lg-2 col-md-6 mt-40">
            {chapterId && (
              <Button type="button" onClick={handleDelete}>
                <i className="flaticon-right-arrow" />
                Delete
                <span></span>
              </Button>
            )}
          </div>
          <div className="col-lg-2 col-md-12 mt-40">
            {chapterId && (
              <Button
                type="button"
                variant="primary"
                onClick={() => handleGotoLesson(chapterId)}
              >
                <i className="flaticon-right-arrow" />
                Chapters
                <span></span>
              </Button>
            )}
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
            <Modal.Title>Delete Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure want to delete the Module {name} ?
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <Button type="button" variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
              <div className="col-lg-2 col-md-2" />
              <div className="col-lg-5 col-md-5">
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
