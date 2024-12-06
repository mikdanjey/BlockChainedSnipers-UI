"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { Button } from "@/primitives/button";
import http from "@/utils/http-common";
import { ChapterDynamicForm } from "./ChapterDynamicForm";

export const CourseManageChapter = ({ currentUser, chapters, courseId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [localForms, setLocalForms] = useState(chapters);

  const addForm = () => {
    setLocalForms((currentFormIds) => [
      ...currentFormIds,
      { name: "", description: "" },
    ]);
  };

  const removeForm = (idToRemove) => {
    setLocalForms((currentFormIds) =>
      currentFormIds.filter((item) => item._id !== idToRemove),
    );
  };

  async function handleRemoveChapter(id) {
    if (id) {
      try {
        await http.delete("/v1/chapters/" + id);
        toast.success("Deleted Successfully");
        removeForm(id);
      } catch (error) {}
    } else {
      location.reload();
    }
  }

  return (
    <div className="row">
      {!localForms.length && (
        <p className="mt-50">
          No Modules added. Click Add Module Button to add new modules.
        </p>
      )}
      <div className="faq-accordion">
        <Accordion
          allowZeroExpanded={true}
          allowMultipleExpanded={true}
          preExpanded={["0"]}
        >
          {localForms?.map((localForm, index) => (
            <AccordionItem
              uuid={localForm._id}
              key={localForm._id}
              dangerouslySetExpanded
            >
              <AccordionItemHeading>
                <AccordionItemButton>
                  Module {index + 1}{" "}
                  {/*
                  <Button
                    type="button"
                    style={{ padding: 8 }}
                    onClick={() => handleRemoveChapter(localForm._id)}
                  >
                    X<span></span>
                  </Button>
                  */}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="col-12">
                  <ChapterDynamicForm
                    id={localForm._id}
                    index={index}
                    name={localForm.name}
                    description={localForm.description}
                    courseId={courseId}
                    onDelete={() => handleRemoveChapter(localForm._id)}
                  />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="col-12">
        <br />
        <Button type="button" size="sm" className="float-end" onClick={addForm}>
          <i className="flaticon-right-arrow" />
          Add Module<span></span>
        </Button>
      </div>
    </div>
  );
};
