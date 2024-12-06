import * as React from "react";

import ReactSelect from "react-select";

const Select = React.forwardRef(({ options, ...props }, ref) => {
  return (
    <ReactSelect
      ref={ref}
      options={options}
      {...props}
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
  );
});
Select.displayName = "Select";

export { Select };
