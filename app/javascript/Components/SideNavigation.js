import React, { useState, useCallback } from "react";
import { Navigation } from "@shopify/polaris";
import {
  HomeMajor,
  OnlineStoreMajor,
  OrdersMajor,
  ProductsMajor,
} from "@shopify/polaris-icons";

const SideNavigation = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Home",
            icon: HomeMajor,
          },
          {
            url: "/path/to/place",
            label: "Orders",
            icon: OrdersMajor,
            badge: "15",
          },
          {
            url: "/admin/products",
            label: "Products",
            icon: ProductsMajor,
            selected: true,
            subNavigationItems: [
              {
                url: "/admin/products",
                disabled: false,
                selected: true,
                label: "All products",
              },
              {
                url: "/admin/products/inventory",
                disabled: false,
                label: "Inventory",
              },
            ],
          },
        ]}
      />
    </Navigation>
  );
};

export default SideNavigation;
