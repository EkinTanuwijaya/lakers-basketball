import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

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
        series: [{
            data:metaData.series[0].data,
            name:metaData.series[0].name,
            type:"line"
        }],
        title:{
          text: title,
          left: "center",
          textStyle: {
            fontSize: 25,
            color: '#4a2381'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        dataZoom: metaData.dataZoom,
        color:"#4a2381",
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose(); 
      };
    }
  }, [metaData,title]);

  return <div ref={chartRef} style={{ height: '400px' , width:'1200px'}} />;
};

export default LineChart;
