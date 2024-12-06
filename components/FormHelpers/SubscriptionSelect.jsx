"use client";

import Select from "react-select";

const subscriptionList = [
  { value: "Basic", label: "Basic" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];

const SubscriptionSelect = ({ label, value, onChange, required }) => {
  const selectedOption = subscriptionList.find((item) => item.value === value);

  return (
    <div className="form-gorup">
      <label>
        {label}
        {required ? " *" : null}
      </label>
      <Select
        placeholder="Select Subscription"
        required
        isClearable
        isSearchable={true}
        isMulti
        options={subscriptionList}
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

export default SubscriptionSelect;
