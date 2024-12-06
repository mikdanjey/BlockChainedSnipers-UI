"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/primitives/button";
import http from "@/utils/http-common";
import { LessonDynamicForm } from "./LessonDynamicForm";
import toast from "react-hot-toast";

export const CourseManageLesson = ({ currentUser, courseId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const chapterId = searchParams.get("chapterId");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterList, setChapterList] = useState([]);
  const router = useRouter();

  const [localForms, setLocalForms] = useState([]);

  useEffect(() => {
    http
      .get(`/v1/chapters?course=${courseId}`)
      .then(({ data }) => {
        setChapterList(
          data?.map(({ _id, name }) => ({ value: _id, label: name })),
        );
        setTimeout(async () => {
          if (chapterId) {
            setSelectedChapter(chapterId);
            await handleLessons(chapterId);
          } else {
            data.length > 0 && handleLessons(data[0]?._id);
          }
        }, 200);
        /*
        if (chapterId) {
          handleLessons(chapterId)
        } else {
          data.length > 0 && handleLessons(data[0]?._id)
        }
        */
      })
      .catch((error) => {
        // console.log(error.message)
        toast.error("Something went wrong!");
      });
  }, [courseId]);

  const addForm = () => {
    setLocalForms((currentFormIds) => [...currentFormIds, { title: "" }]);
  };

  const removeForm = (idToRemove) => {
    setLocalForms((currentFormIds) =>
      currentFormIds.filter((item) => item._id !== idToRemove),
    );
  };

  async function handleRemoveChapter(id) {
    if (id) {
      try {
        await http.delete("/v1/lessons/" + id);
        toast.success("Deleted Successfully");
        removeForm(id);
      } catch (error) {}
    } else {
      location.reload();
    }
  }

  async function handleLessons(chapterId) {
    if (courseId && chapterId) {
      try {
        const { data } = await http.get(
          `/v1/lessons?course=${courseId}&chapter=${chapterId}`,
        );
        setSelectedChapter(chapterId);
        setLocalForms(data);
      } catch (error) {}
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="form-gorup">
            <label>Select Module</label>
            <Select
              name="chapter"
              value={chapterList.find(
                (chapter) => chapter.value === selectedChapter,
              )}
              options={chapterList}
              onChange={(item) => handleLessons(item.value)}
            />
          </div>
        </div>
      </div>
      <br />

      <div className="row">
        {!localForms.length && (
          <p className="mt-50">Chapters are not available.</p>
        )}

        <div className="faq-accordion">
          <Accordion
            allowZeroExpanded={true}
            allowMultipleExpanded={true}
            preExpanded={["0"]}
          >
            {localForms.map((localForm, index) => (
              <AccordionItem
                uuid={localForm._id}
                key={localForm._id}
                dangerouslySetExpanded
              >
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Chapter {index + 1}{" "}
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
                    <LessonDynamicForm
                      courseId={courseId}
                      id={localForm._id}
                      index={index}
                      title={localForm.title}
                      fileKey={localForm.fileKey}
                      selectedChapter={selectedChapter}
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
          {selectedChapter && (
            <Button
              type="button"
              size="sm"
              className="float-end"
              onClick={addForm}
            >
              <i className="flaticon-right-arrow" />
              Add Chapter<span></span>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
