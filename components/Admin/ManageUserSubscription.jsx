"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import moment from "moment";
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
  subscriptionId: z.string().min(1, {
    message: "subscription is mandatory.",
  }),
  endDate: z.string().min(1, {
    message: "End Date is mandatory.",
  }),
});

export function ManageUserSubscription({
  action,
  details = {},
  subscriptions = [],
  subscriptionList = [],
}) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { subscription, subscriptionEndDate } = details;

  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        subscriptionId: subscription?._id,
        // subscriptionId: "661173e68e270bf5a1909ca4",
        endDate: moment(subscriptionEndDate).format("MM/DD/YYYY"),
      },
    });

  const { isSubmitting } = formState;

  const user = {
    heading: "Manage Subscription",
    actionButtonLabel: "Manage Subscription",
    submitButtonLabel: "Update",
    cancelButtonLabel: "Close",
    actionButtonVariant: "btn btn-success btn-sm fs-12 ms-2",
  };

  async function onSubmit(values) {
    const { subscriptionId, endDate } = values;
    try {
      const { data } = await http.put("/v1/users/" + details._id, {
        subscription: subscriptionId,
        subscriptionEndDate: endDate,
      });
      console.log(data);
      router.refresh();
      toast.success("Updated successfully");
      handleClose();
      return;
    } catch (error) {
      console.log(error);
    }
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
        size={"lg"}
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
              <>
                <div className="row">
                  <div className="col-6">
                    Current Subscription: {subscription?.name}
                  </div>
                  <div className="col-6">
                    End Date: {moment(subscriptionEndDate).format("MM/DD/YYYY")}{" "}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <FormField
                      control={control}
                      name="subscriptionId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="subscriptionId">
                            Subscription
                          </FormLabel>
                          <FormControl>
                            <select {...field} className="form-control">
                              <option value="">Select a Subscription</option>
                              {subscriptionList.map((subscription) => (
                                <option
                                  key={subscription._id}
                                  value={subscription._id}
                                >
                                  {subscription.name}
                                </option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-6">
                    <FormField
                      control={control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="endDate">
                            End Date: (MM/DD/YYYY)
                          </FormLabel>
                          <FormControl>
                            <Input id="endDate" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </>
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

export default ManageUserSubscription;
