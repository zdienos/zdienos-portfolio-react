import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CanvasJSReact from "../Chart/canvasjs.react";
import fetchJsonp from "fetch-jsonp";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const WakaChartURL = 'https://wakatime.com/share/@zdienos/0f82529f-2922-478d-afab-5b78745f01a8.json'; //30 day
const WakaChartURL = 'https://wakatime.com/share/@zdienos/87859afd-b87c-4e94-899e-a42ffe0f7b72.json'; //last year

function Wakatime() {
  const [wakadata, setData] = useState([]);  

  const fetchData = () => {
    fetchJsonp(WakaChartURL)
      .then(function(response) {
        return response.json()
      }).then(function(json) {              
        json.data.map(({ color, name, percent }) => {          
          wakadata.push({y: percent, label: name})
        });                
        setData(wakadata)        
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  useEffect(() => {
    fetchData()
  }, []) 


  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Wakatime Languange",
    },
    axisX: {
      title: "Social Network",
      reversed: true,
    },
    axisY: {
      title: "Monthly Active Users",
      includeZero: true,
      
    },
    data: [
      {
        type: "bar",
        dataPoints: wakadata
      },
    ],
  };

  return(
    <div>
    <Container fluid className="wakatime">
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <CanvasJSChart options={options} />        
      </Row>
    </Container>
    </div >
  );
}

export default Wakatime;
