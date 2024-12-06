import React from "react";
import { Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";

export function FileUpload({
  control,
  label,
  name,
  accept = { "image/*": [".jpeg", ".png"] },
  userIndication = (
    <div className="text-center">
      Click to upload
      <div className="form-text">Upload image size 750x500px</div>
    </div>
  ),
}) {
  function bytesToSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null} // Default value is null since only one file can be selected.
      render={({ field }) => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          accept,
          onDrop: (acceptedFiles) => {
            // Since only one file can be selected, take the first file from the array.
            field.onChange(acceptedFiles[0] || null);
          },
          multiple: false, // Restrict to a single file selection.
        });

        // Display info of the selected file, if any
        const file = field.value?.path ? (
          <div>
            <strong>Selected file:</strong> {field.value.path} -{" "}
            {bytesToSize(field.value.size)}
          </div>
        ) : null;

        return (
          <div className="form-group">
            <label>{label}</label>
            <section
              style={{ height: 100 }}
              {...getRootProps({
                className: `dropzone border form-control d-flex justify-content-center align-items-center ${isDragActive ? "bg-light" : ""}`,
              })}
            >
              <input {...getInputProps()} />
              {!file && userIndication}
              {file}
            </section>
          </div>
        );
      }}
    />
  );
}
