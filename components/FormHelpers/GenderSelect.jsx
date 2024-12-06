"use client";

import Select from "react-select";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const GenderSelect = ({ label, value, onChange, required }) => {
  const selectedOption = genderOptions.find((gender) => gender.value === value);

  return (
    <div className="form-gorup">
      <label>
        {label}
        {required ? " *" : null}
      </label>
      <Select
        placeholder="Select Gender"
        required
        isClearable
        isSearchable={true}
        options={genderOptions}
        value={selectedOption || value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.label}</div>
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

export default GenderSelect;
