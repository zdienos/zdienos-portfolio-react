import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import fetchJsonp from "fetch-jsonp";

// const WakaChartURL = 'https://wakatime.com/share/@zdienos/87859afd-b87c-4e94-899e-a42ffe0f7b72.json'; //last year
// const WakaChartURL = "https://wakatime.com/share/@zdienos/0f82529f-2922-478d-afab-5b78745f01a8.json"; //30 day
// const WakaChartURL = 'https://wakatime.com/share/@zdienos/ba313035-ceeb-48b6-91fc-784abe4c4329.json'; //all the time
const WakaChartURL = 'https://wakatime.com/share/@zdienos/618218b9-cc3f-4100-bcf5-5f1e6c0a76d6.json'; //last 7 days

am4core.useTheme(am4themes_animated);

function Wakatime() {
  const chart = useRef(null);
  const [wakadata, setData] = useState([]);

//  useEffect(() => {
//    async function fetchData() {
//     await fetchJsonp(WakaChartURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       console.log(json);
//       setData(json);
//     })
//     .catch(function (ex) {
//       console.log("parsing failed", ex);
//     });
//     // const response = await xxx
//    }
//    fetchData();
//  }, []);
  

  useLayoutEffect(() => {
    async function fetchData() {
       await fetchJsonp(WakaChartURL)
        .then(function (response) {        
          return response.json();
        })
        .then(function (json) {
          console.log('first',  json);

          ///

          let x = am4core.create("chartdiv", am4charts.XYChart);

          x.paddingRight = 20;

          x.cursor = new am4charts.XYCursor();          
          x.scrollbarX = new am4core.Scrollbar();
          x.scrollbarY = new am4core.Scrollbar();

          let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.dataFields.category = "name";
          categoryAxis.renderer.minGridDistance = 1;
          categoryAxis.renderer.inversed = true;
          categoryAxis.renderer.grid.template.disabled = true;
          categoryAxis.title.text = "Languages over Last 7 Days";

          let valueAxis = x.xAxes.push(new am4charts.ValueAxis());
          valueAxis.min = 0;
          

          let series = x.series.push(new am4charts.ColumnSeries());
          series.dataFields.categoryY = "name";
          series.dataFields.valueX = "percent";
          series.tooltipText = "{valueX.value}%";
          series.columns.template.strokeOpacity = 0;
          series.columns.template.column.cornerRadiusBottomRight = 5;
          series.columns.template.column.cornerRadiusTopRight = 5;

          let labelBullet = series.bullets.push(new am4charts.LabelBullet());
          labelBullet.label.horizontalCenter = "left";
          labelBullet.label.dx = 10;
          labelBullet.label.text =
            "{values.valueX.workingValue.formatNumber('#.0as')}";
          labelBullet.locationX = 1;

          // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
          series.columns.template.adapter.add("fill", function (fill, target) {
            return x.colors.getIndex(target.dataItem.index);
          });

          categoryAxis.sortBySeries = series;
          x.data = json.data;

          chart.current = x;

          return () => {
            x.dispose();
          };
          
          ///          
        })
        .catch(function (ex) {
          console.log("parsing failed", ex);
        });      
     }
     fetchData();        
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
    <h2 className="project-heading" style={{ paddingBottom: "10px" }}>
      Languages I <strong className="purple">Use</strong>
    </h2>
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>    
  </Row>
  )
}
export default Wakatime;
