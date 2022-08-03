import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#274C77",
    grade3: "#6096BA",
    grade2: "#A3CEF1",
    grade1: "#8B8C89",
    grade0: "#EFEFEF",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "10px" }}>
        Days <strong className="purple"> I Code</strong>
      </h2>
      <GitHubCalendar style={{ fill:"black" }}
        username="zdienos"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
        showWeekdayLabels="true"
        transformData={"selectLastHalfYear"} 
        hideTotalCount="false" 
        hideColorLegend="false"
      />
    </Row>
  );
}

export default Github;
