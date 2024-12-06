"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/primitives/button";
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
  inputText: z.string().min(1, {
    message: "Input Text is mandatory.",
  }),
});

export function SingleLineTextPage() {
  const router = useRouter();
  const { handleSubmit, control, reset, getFieldState, formState, setValue } =
    useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        inputText: "",
      },
    });

  const { isSubmitting } = formState;

  async function onSubmit(values) {
    try {
      const { data } = await http.post("/v1/****", values);
      console.log(data);
      toast.success("success");
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
          <div className="col-12">
            <FormField
              control={control}
              name="inputText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="inputText">Input Text</FormLabel>
                  <FormControl>
                    <Input id="inputText" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-12">
            <Button type="submit" disabled={isSubmitting}>
              <i className="flaticon-right-arrow" />
              Submit<span></span>
            </Button>{" "}
            <Button type="button" variant="secondary" onClick={onReset}>
              Reset<span></span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
