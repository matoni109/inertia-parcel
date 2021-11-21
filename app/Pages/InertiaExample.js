import React from "react";

// import MyToggle from "~/Components/MyToggle";

const InertiaExample = ({ name }) => (
  <>
    <h1>Hello {name}!</h1>
    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 className="text-lg">
        <a className="no-underline hover:underline text-black" href="#"></a>
      </h1>
      <p className="text-grey-darker text-sm">11/1/19</p>
    </header>
  </>
);
InertiaExample.layout = null;
export default InertiaExample;
