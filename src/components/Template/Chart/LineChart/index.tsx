import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { title } from 'process';

type EChartsOption = echarts.EChartsOption;
interface LineChartInterface{
    metaData : any;
    title: string;
}
const LineChart = ({metaData,title}:LineChartInterface) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option: EChartsOption = {
        xAxis: metaData.xAxis,
        yAxis: metaData.yAxis,
        series: metaData.series,
        title:{
          text: title
        },
        tooltip: {
          trigger: 'axis'
        },
        dataZoom: metaData.dataZoom
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose(); // Dispose the chart instance when the component unmounts
      };
    }
  }, [metaData]);

  return <div ref={chartRef} style={{ height: '400px'}} />;
};

export default LineChart;
