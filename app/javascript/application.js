import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

import * as pages from ".././Pages/*";

createInertiaApp({
  resolve: (name) => pages[`${name}.js`],
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
