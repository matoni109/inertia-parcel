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
        <Card sectioned>
          <Button onClick={() => alert("Button clicked!")}>
            Example buttons
          </Button>
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
