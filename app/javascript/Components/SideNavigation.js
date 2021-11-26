import React from "react";
import { Icon, Navigation } from "@shopify/polaris";
import {
  CirclePlusOutlineMinor,
  CustomersMajor,
  HomeMajor,
  MarketingMajor,
  OnlineStoreMajor,
  OrdersMajor,
  ProductsMajor,
  ViewMinor,
} from "@shopify/polaris-icons";

const SideNavigation = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/path/to/place",
            label: "Hasbro",
            icon: HomeMajor,
          },
          {
            url: "/path/to/place",
            label: "Orders",
            icon: HomeMajor,
            badge: "15",
          },
          {
            url: "/path/to/place",
            label: "Products",
            icon: HomeMajor,
          },
          {
            url: "/path/to/place",
            label: "Hasbro",
            icon: HomeMajor,
          },
          {
            url: "/path/to/place",
            label: "Orders",
            icon: HomeMajor,
            badge: "15",
          },
          {
            url: "/path/to/place",
            label: "Products",
            icon: HomeMajor,
          },
        ]}
      />
    </Navigation>
  );
};

export default SideNavigation;
