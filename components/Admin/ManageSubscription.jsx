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
import { Textarea } from "@/primitives/textarea";
import http from "@/utils/http-common";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Subscription Name is mandatory.",
  }),
  orderNumber: z.string().min(1, {
    message: "Order Number is mandatory.",
  }),
  description: z
    .string({
      message: "Description is mandatory.",
    })
    .optional(),
  monthlyPrice: z
    .any({
      message: "Monthly Price is not valid.",
    })
    .optional(),
  monthlyOriginalPrice: z
    .any({
      message: "Monthly Price is not valid.",
    })
    .optional(),
  quaterlyPrice: z
    .any({
      message: "Quaterly Price is not valid.",
    })
    .optional(),
  quaterlyOriginalPrice: z
    .any({
      message: "Quaterly Price is not valid.",
    })
    .optional(),
  halfyearlyPrice: z
    .any({
      message: "Halfyearly Price is not valid.",
    })
    .optional(),
  halfyearlyOriginalPrice: z
    .any({
      message: "Halfyearly Price is not valid.",
    })
    .optional(),
  annualPrice: z
    .any({
      message: "Annual Price is not valid.",
    })
    .optional(),
  annualOriginalPrice: z
    .any({
      message: "Annual Price is not valid.",
    })
    .optional(),
});

export function ManageSubscription({ index = 0, action, details = {} }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    name = "",
    description = "",
    monthlyPrice = "",
    monthlyOriginalPrice = "",
    quaterlyPrice = "",
    quaterlyOriginalPrice = "",
    halfyearlyPrice = "",
    halfyearlyOriginalPrice = "",
    annualPrice = "",
    annualOriginalPrice = "",
  } = details;

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name,
        description,
        monthlyPrice,
        monthlyOriginalPrice,
        quaterlyPrice,
        quaterlyOriginalPrice,
        halfyearlyPrice,
        halfyearlyOriginalPrice,
        annualPrice,
        annualOriginalPrice,
        orderNumber: index + 1 + "",
      },
    });

  const { isSubmitting } = formState;

  let subscription = {};

  async function onSubmit(values) {
    const { orderNumber } = values;
    let data;
    try {
      switch (action) {
        case "EDIT":
          ({ data } = await http.put(
            "/v1/subscriptions/" + details._id,
            { ...values, orderNumber: parseInt(orderNumber) },
          ));
          console.log(data);
          router.refresh();
          toast.success("Updated successfully");
          handleClose();
          return;

        case "DELETE":
          await http.delete("/v1/subscriptions/" + details._id);
          router.refresh();
          toast.success("Deleted successfully");
          handleClose();
          return;

        case "ADD":
          ({ data } = await http.post("/v1/subscriptions", { ...values, orderNumber: parseInt(orderNumber) },));
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

  switch (action) {
    case "EDIT":
      subscription = {
        heading: "Edit subscription",
        actionButtonLabel: "Edit",
        submitButtonLabel: "Update",
        cancelButtonLabel: "Cancel",
        actionButtonVariant: "btn btn-warning btn-sm fs-12 ms-2",
      };
      break;
    case "DELETE":
      subscription = {
        heading: "Delete subscription",
        actionButtonLabel: "Delete",
        submitButtonLabel: "Delete",
        cancelButtonLabel: "Cancel",
        actionButtonVariant: "btn btn-danger btn-sm fs-12 ms-2",
      };
      break;
    default:
      subscription = {
        heading: "Add subscription",
        actionButtonLabel: "Add",
        submitButtonLabel: "Add",
        cancelButtonLabel: "Close",
        actionButtonVariant: "primary btn-success",
      };
      break;
  }

  const {
    heading,
    actionButtonLabel,
    submitButtonLabel,
    cancelButtonLabel,
    actionButtonVariant,
  } = subscription;

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
                <>Are you sure want to delete the {name} subscription ?</>
              )}
              {(action === "ADD" || action === "EDIT") && (
                <>
                  <div className="row">
                    <div className="col-12">
                      <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="name">
                              Subscription Name
                            </FormLabel>
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

                  <div className="row">
                    <div className="col-12">
                      <FormField
                        control={control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="description">
                              Description
                            </FormLabel>
                            <FormControl>
                              <Textarea id="description" rows={2} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="row d-none">
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="monthlyPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="monthlyPrice">
                              Monthly Price
                            </FormLabel>
                            <FormControl>
                              <Input id="monthlyPrice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="monthlyOriginalPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="monthlyOriginalPrice">
                              Original Price
                            </FormLabel>
                            <FormControl>
                              <Input id="monthlyOriginalPrice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="row d-none">
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="quaterlyPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="quaterlyPrice">
                              Quarterly Price
                            </FormLabel>
                            <FormControl>
                              <Input id="quaterlyPrice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="quaterlyOriginalPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="quaterlyOriginalPrice">
                              Original Price
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="quaterlyOriginalPrice"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="row d-none">
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="halfyearlyPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="halfyearlyPrice">
                              HalfYearly Text
                            </FormLabel>
                            <FormControl>
                              <Input id="halfyearlyPrice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="halfyearlyOriginalPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="halfyearlyOriginalPrice">
                              Original Price
                            </FormLabel>
                            <FormControl>
                              <Input id="halfyearlyOriginalPrice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="row d-none">
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="annualPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="annualPrice">
                              Annual Price
                            </FormLabel>
                            <FormControl>
                              <Input id="annualPrice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-6">
                      <FormField
                        control={control}
                        name="annualOriginalPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="annualOriginalPrice">
                              Original Price
                            </FormLabel>
                            <FormControl>
                              <Input id="annualOriginalPrice" {...field} />
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

export default ManageSubscription;
