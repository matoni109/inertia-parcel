import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

import * as pages from ".././Pages/*";
import "../assets/stylesheets/application.css";
// rails s
// yarn build
// yarn build-css

if (module.hot) {
  module.hot.accept();
  // console.log(module.hot);
}


createInertiaApp({
  resolve: (name) => pages[`${name}.js`],
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
