"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Category Name is mandatory.",
  }),
  orderNumber: z.string().min(1, {
    message: "Order Number is mandatory.",
  }),
});

export function ManageCategories({ index = 0, action, details = {} }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name = "" } = details;

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name,
        orderNumber: index + 1 + "",
      },
    });

  const { isSubmitting } = formState;

  let category = {};

  async function onSubmit(values) {
    const { name, orderNumber } = values;
    let data;
    try {
      switch (action) {
        case "EDIT":
          ({ data } = await http.put("/v1/categories/" + details._id, {
            name,
            orderNumber: parseInt(orderNumber),
          }));
          console.log(data);
          router.refresh();
          toast.success("Updated successfully");
          handleClose();
          return;

        case "DELETE":
          await http.delete("/v1/categories/" + details._id);
          router.refresh();
          toast.success("Deleted successfully");
          handleClose();
          return;

        case "ADD":
          ({ data } = await http.post("/v1/categories", { name, orderNumber: parseInt(orderNumber), }));
          reset();
          router.refresh();
          toast.success("Added successfully");
          handleClose();
          return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onReset() {
    reset();
  }

  switch (action) {
    case "EDIT":
      category = {
        heading: "Edit category",
        actionButtonLabel: "Edit",
        submitButtonLabel: "Update",
        cancelButtonLabel: "Cancel",
        actionButtonVariant: "btn btn-warning btn-sm fs-12 ms-2",
      };
      break;
    case "DELETE":
      category = {
        heading: "Delete category",
        actionButtonLabel: "Delete",
        submitButtonLabel: "Delete",
        cancelButtonLabel: "Cancel",
        actionButtonVariant: "btn btn-danger btn-sm fs-12 ms-2",
      };
      break;
    default:
      category = {
        heading: "Add category",
        actionButtonLabel: "Add",
        submitButtonLabel: "Add",
        cancelButtonLabel: "Close",
        actionButtonVariant: "primary  btn-success",
      };
      break;
  }

  const {
    heading,
    actionButtonLabel,
    submitButtonLabel,
    cancelButtonLabel,
    actionButtonVariant,
  } = category;

  return (
    <>
      <Button variant={actionButtonVariant} onClick={handleShow}>
        {actionButtonLabel}
      </Button>
      <Modal
        show={show}
        size={action === "DELETE" ? "sm" : "lg"}
        centered
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form
          onSubmit={handleSubmit(onSubmit)}
          getFieldState={getFieldState}
          formState={formState}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header closeButton>
              <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {action === "DELETE" && (
                <>Are you sure want to delete the {name} category ?</>
              )}
              {(action === "ADD" || action === "EDIT") && (
                <div className="row">
                  <div className="col-12">
                    <FormField
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="name">Category Name</FormLabel>
                          <FormControl>
                            <Input id="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-12">
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
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button type="button" variant="secondary" onClick={handleClose}>
                {cancelButtonLabel}
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {submitButtonLabel}
              </Button>
            </Modal.Footer>
          </form>
        </Form>
      </Modal>
    </>
  );
}

export default ManageCategories;
