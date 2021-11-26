import React, { useState, useCallback } from "react";

const TopNavBar = () => {
  // const [checked, setChecked] = useState(false);
  // const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  return (
    <>
      <div className="flex justify-between my-4 px-3">
        <span className="avatar">Wheel-House Image</span>
        <span className="flex">
          <img
            className=" avatar inline-block h-16 w-16 rounded-full ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <p>Devin</p>
        </span>
      </div>
    </>
  );
};

export default TopNavBar;
