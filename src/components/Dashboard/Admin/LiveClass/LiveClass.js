import React, { useState } from "react";
import DASideBar from "../DASideBar/DASideBar";
import CreateLiveClass from "./CreateLiveClass";
import ViewLiveClasses from "./ViewLiveClasses";
import Tab from "../../../UI/Tab";

const tabs = [{ name: "View LiveClass" }, { name: "Create LiveClass" }];

const LiveClass = () => {
  const [activeTab, setActiveTab] = useState("View LiveClass");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="body__wrapper">
      <div className="main_wrapper overflow-hidden">
        <div className="dashboardarea sp_bottom_100">
          <div className="dashboard">
            <div className="container-fluid full__width__padding">
              <div className="row">
                <DASideBar />
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="dashboard__content__wraper">
                    <div className="dashboard__section__title">
                      <h4>Live Class</h4>
                    </div>
                    <div className="row">
                      <Tab
                        tabs={tabs}
                        activeTab={activeTab}
                        handleTabChange={handleTabChange}
                      />
                      <div className="tab-content tab__content__wrapper aos-init aos-animate">
                        <div
                          className={`tab-pane fade ${
                            activeTab === "View LiveClass" ? "show active" : ""
                          }`}
                        >
                          <div className="row">
                            <ViewLiveClasses
                              key={activeTab}
                              activeTab={activeTab}
                            />
                          </div>
                        </div>
                        <div
                          className={`tab-pane fade ${
                            activeTab === "Create LiveClass"
                              ? "show active"
                              : ""
                          }`}
                        >
                          <div className="row">
                            <CreateLiveClass setActiveTab={setActiveTab} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
