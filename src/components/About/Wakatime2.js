import React, { useRef, useLayoutEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Wakatime(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    x.paddingRight = 20;

    let data = [];
    let visits = 10;

    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    // x.data = data;

    let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "network";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = true;

let valueAxis = x.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;

let series = x.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "network";
series.dataFields.valueX = "MAU";
series.tooltipText = "{valueX.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusBottomRight = 5;
series.columns.template.column.cornerRadiusTopRight = 5;

let labelBullet = series.bullets.push(new am4charts.LabelBullet())
labelBullet.label.horizontalCenter = "left";
labelBullet.label.dx = 10;
labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
labelBullet.locationX = 1;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target){
  return x.colors.getIndex(target.dataItem.index);
});

categoryAxis.sortBySeries = series;
x.data = [
    {
      "network": "Facebook",
      "MAU": 2255250000
    },
    {
      "network": "Google+",
      "MAU": 430000000
    },
    {
      "network": "Instagram",
      "MAU": 1000000000
    },
    {
      "network": "Pinterest",
      "MAU": 246500000
    },
    {
      "network": "Reddit",
      "MAU": 355000000
    },
    {
      "network": "TikTok",
      "MAU": 500000000
    },
    {
      "network": "Tumblr",
      "MAU": 624000000
    },
    {
      "network": "Twitter",
      "MAU": 329500000
    },
    {
      "network": "WeChat",
      "MAU": 1000000000
    },
    {
      "network": "Weibo",
      "MAU": 431000000
    },
    {
      "network": "Whatsapp",
      "MAU": 1433333333
    },
    {
      "network": "YouTube",
      "MAU": 1900000000
    }
  ]

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default Wakatime;
