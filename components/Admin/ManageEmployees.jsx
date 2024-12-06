"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import moment from "moment";
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
  firstName: z.string().min(1, {
    message: "First Name is mandatory.",
  }),
  lastName: z.string().min(1, {
    message: "Last Name is mandatory.",
  }),
  email: z.string().min(1, {
    message: "Email is mandatory.",
  }),
  dob: z.any().optional(),
});
// TODO: To be deleted
export function ManageEmployee({ action, details = {} }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { firstName = "", lastName = "", email = "", dob = "" } = details;

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName,
        lastName,
        email,
        dob: dob ? moment(dob).format("MM/DD/YYYY") : "",
      },
    });

  const { isSubmitting } = formState;

  let user = {};

  async function onSubmit(values) {
    let data;
    try {
      switch (action) {
        case "EDIT":
          ({ data } = await http.put("/v1/admins/" + details._id, values));
          router.refresh();
          toast.success("Updated the employee details successfully");
          handleClose();
          break;

        case "DELETE":
          await http.delete("/v1/admins/" + details._id);
          router.refresh();
          toast.success("Deleted the employee successfully");
          handleClose();
          break;

        case "ADD":
          ({ data } = await http.post("/v1/admins", values));
          reset();
          router.refresh();
          toast.success("Employee created successfully");
          handleClose();
          break;
      }
      location.reload();
    } catch (error) {
      console.log(error);
      const data = error.response?.data;
      if (data?.message) {
        toast.error(data?.message);
      } else {
        toast.error("Unexpected error. Please try again");
      }
    }
  }

  switch (action) {
    case "EDIT":
      user = {
        heading: "Edit Employee",
        actionButtonLabel: "Edit",
        submitButtonLabel: "Update",
        cancelButtonLabel: "Cancel",
        actionButtonVariant: "btn btn-warning btn-sm fs-12 ms-2",
      };
      break;
    case "DELETE":
      user = {
        heading: "Delete Employee",
        actionButtonLabel: "Delete",
        submitButtonLabel: "Delete",
        cancelButtonLabel: "Cancel",
        actionButtonVariant: "btn btn-danger btn-sm fs-12 ms-2",
      };
      break;
    default:
      user = {
        heading: "Add Employee",
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
  } = user;

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
                <>
                  Are you sure want to deactive {firstName} {lastName} ?
                </>
              )}
              {(action === "ADD" || action === "EDIT") && (
                <>
                  <div className="row">
                    <div className="col-12">
                      <FormField
                        control={control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="firstName">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input id="firstName" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
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
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <FormField
                        control={control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                              <Input id="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-12 d-none">
                      <FormField
                        control={control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                            <FormControl>
                              <Input id="dob" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </>
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

export default ManageEmployee;
