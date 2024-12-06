"use client";

import Select from "react-select";

// const categories = [
//   { value: "Web Development", label: "Web Development" },
//   { value: "App Development", label: "App Development" },
//   { value: "Business", label: "Business" },
//   { value: "Finance & Accounting", label: "Finance & Accounting" },
//   { value: "IT & Software", label: "IT & Software" },
//   { value: "Office Productivity", label: "Office Productivity" },
//   { value: "Personal Development", label: "Personal Development" },
//   { value: "Design", label: "Design" },
//   { value: "Marketing", label: "Marketing" },
//   { value: "Lifestyle", label: "Lifestyle" },
//   { value: "Photography & Video", label: "Photography & Video" },
//   { value: "Health & Fitness", label: "Health & Fitness" },
//   { value: "Music", label: "Music" },
//   { value: "Teacing & Academics", label: "Teacing & Academics" },
// ];

const CategorySelect = ({ label, value, required, values = [] }) => {
  const selectedOption = values.find((category) => category._id === value);
  return (
    <div className="form-gorup">
      <label>
        {label}
        {required ? " *" : null}
      </label>
      <Select
        placeholder="Select Category"
        required
        isClearable
        isSearchable={true}
        options={values}
        value={selectedOption || value}
        formatOptionLabel={(option) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.name}</div>
          </div>
        )}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "green",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CategorySelect;
