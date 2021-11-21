import React, { useState, useCallback } from "react";
import { Checkbox } from "@shopify/polaris";

const CheckboxExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  return (
    <Checkbox
      label="Basic checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default CheckboxExample;
