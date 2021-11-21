import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

import * as pages from ".././Pages/*";

import "@shopify/polaris/build/esm/styles.css";
import "../assets/stylesheets/application.css";

createInertiaApp({
  resolve: (name) => pages[`${name}.js`],
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
