import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // const colourTheme = {
    // background: "transparent",
    // text: "#274c77",
  //   grade4: "#DEB6AB",
  //   grade3: "#ECCCB2",
  //   grade2: "#ECCCB2",
  //   grade1: "#F5E8C7",
  //   grade0: "#F2D7D9",
  // };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "10px" }}>
        Days <strong className="purple"> I Code</strong>
      </h2>
      <GitHubCalendar style={{ fill:"black" }}
        username="zdienos"
        blockSize={15}
        blockMargin={5}
        // theme={colourTheme}
        color={"#80558C"}
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
