"use client";

import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DeleteButton = ({ primaryId, payload }) => {
  const router = useRouter();
  const handleDelete = () => {
    console.log(primaryId, payload);
    // axios
    //   .delete(`/api/courses/${vdoId}/video`)
    //   .then((response) => {
    //     toast.success(response.data.message);
    //     router.refresh();
    //   })
    //   .catch((error) => {
    //     toast.error("Something went wrong!");
    //   });
  };
  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={handleDelete}
    >
      <i className="bx bx-trash"></i>
    </button>
  );
};

export default DeleteButton;
