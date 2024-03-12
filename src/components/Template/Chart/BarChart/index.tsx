import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
interface BarChartInterface{
    metaData : any;
    title: string;
}
const BarChart = ({metaData,title}:BarChartInterface) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option: EChartsOption = {
        xAxis: metaData.xAxis,
        yAxis: metaData.yAxis,
        series: [{
            data: [...metaData.series[0].data],
            type: 'bar'
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
        color:'#4a2381',
        label: metaData.label
      };
   
      myChart.setOption(option);

      return () => {
        myChart.dispose(); 
      };
    }
  }, [metaData,title]);

  return <div ref={chartRef} style={{ height: '400px' , width:'500px' , bottom:0}} />;
};

export default BarChart;
