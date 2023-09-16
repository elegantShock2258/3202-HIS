import React from "react";
import "./App.css";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";
import Home from "./views/home/home";
import TabContainer from "./views/home/tab";
import Test from "./views/home/test";
import Hardern from "./views/home/hardern";
import Result from "./views/home/result";

function App() {
  // TODO: figure out how to run a script with args and permissions and show the o/p and progress bar and errors if any

  return (
    <>
      <div className="flex w-full h-full parent">
        <Tabs
          aria-label="Options"
          aria-orientation="vertical"
          className="navbar"
          classNames={{
            tabList: "tabsList",
            panel: "tabContentContainer",
            base: "navbar",
            tab: "tab",
            cursor: "cursor",
          }}
          disabledKeys={["logo"]}
        >
          <Tab
            key="home"
            title={
              <>
                <TabContainer icon={faHome} title={"Home"} />
              </>
            }
          >
            <Card>
                <Home />
            </Card>
          </Tab>
          <Tab
            key="music"
            title={
              <>
                <TabContainer icon={faHome} title={"Test"} />
              </>
            }
          >
            <Card>
              <Test />
            </Card>
          </Tab>
          <Tab
            key="Profiles"
            title={
              <>
                <TabContainer icon={faHome} title={"Hardern"} />
              </>
            }
          >
            <Card>
              <Hardern />
            </Card>
          </Tab>
          <Tab
            key="videos"
            title={
              <>
                <TabContainer icon={faHome} title={"Results"} />
              </>
            }
          >
            <Card>
              <Result />
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
