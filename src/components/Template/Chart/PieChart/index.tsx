import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
interface PieChartInterface{
    metaData : any;
    data:any;
}
const PieChart = ({metaData,data}:PieChartInterface) => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      metaData.series[0].data = data
      const option: EChartsOption = {
        title: metaData.title,
        
        tooltip: {
          trigger: 'item',
        },
        series: metaData.series
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose(); // Dispose the chart instance when the component unmounts
      };
    }
  }, [data, metaData.title, metaData.series]);

  return <div ref={chartRef} style={{ height: '400px' }} />;
};

export default PieChart;
