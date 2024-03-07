import { useEffect, useState } from 'react';
import LineCharts from '../../Template/Chart/LineChart';
import { Card } from 'antd';
import axios from 'axios';

const LineChart = () => {
    const [xAxis, setxAxis] = useState<string[]>([]);
    const [seriesData, setSeriesData] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        let axisData:string[] = []
        let series:number[] = []
        axios.get('http://localhost:8081/match')
        .then(res => {
            res.data.map((dt:any) => {
                axisData.push(dt.date)
                if(dt.homename == "Lakers"){
                    series.push(dt.homescore)
                }
                if(dt.awayname == "Lakers"){
                    series.push(dt.awayscore)
                }
            })
            setxAxis(axisData)
            setSeriesData(series)
            setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },[])

    const lineChartMetaData = {
        'xAxis': {
            type: 'category',
            data: xAxis
        },
        'yAxis': {
            type: 'value'
        },
        'series': [
            {
                data: seriesData,
                type: 'line',
                name: 'Score (pts)'
            }
        ],
        'dataZoom': [
            {
              type: 'inside',
              start: 0,
              end: 20
            },
            {
              start: 0,
              end: 100
            }
          ],
    }   
  
  return (
    <>
        <Card loading={loading} >
          <LineCharts metaData = {lineChartMetaData} title="Point Scored by Lakers"/>  
        </Card>
    </>
  );
}
export default LineChart;