import React from "react";
import { AppProvider } from "@shopify/polaris";
import SideNavigation from "../javascript/Components/SideNavigation";
import TopNavBar from "../javascript/Components/TopNavBar";
import ContentTabs from "../javascript/Components/ConentTabs";

const InertiaTailwind = () => {
  return (
    <>
      <AppProvider>
        <TopNavBar />
        <div className="flex flex-no-wrap">
          <div className="">
            <div className="">
              <SideNavigation />
            </div>
          </div>

          {/* <!-- Sidebar ends --> */}

          <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
            {/* <!-- Remove className [ border-dashed border-2 border-gray-300 ] to remove dotted border --> */}
            <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
              <ContentTabs />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
};

export default InertiaTailwind;
