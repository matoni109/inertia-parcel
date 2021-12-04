import React, { useState, useCallback } from "react";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Frame,
  Toast,
  List,
  Page,
  Card,
  Button,
  SkeletonThumbnail,
} from "@shopify/polaris";
import { useState } from "react";

const InertiaExample = () => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} />
  ) : null;

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Polaris Components in React">
        <div className="mt-5 flex items-center">
          <img src="https://picsum.photos/60/60" className="rounded-full" />
          <div className="ml-3">
            <h3 className="font-semibold"> Lana Del Rey T12</h3>
            <p className="text-gray-500"> Singer/songwriter </p>
            <label className="block">
              <span className="text-gray-700">Input (datetime-local)</span>
              <input
                type="datetime-local"
                className="form-input mt-1 block w-full"
              />
            </label>
            <article class="prose lg:prose-xl">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
            </article>
          </div>
        </div>
        <Card sectioned>
          <Button onClick={() => alert("Button clicked!")}>Example</Button>
        </Card>

        <Card sectioned>
          <div style={{ height: "250px" }}>
            <Frame>
              <Page title="Toast example">
                <Button onClick={toggleActive}>Show Toast</Button>
                {toastMarkup}
              </Page>
            </Frame>
          </div>
        </Card>
      </Page>
    </AppProvider>
  );
};
InertiaExample.layout = null;
export default InertiaExample;
