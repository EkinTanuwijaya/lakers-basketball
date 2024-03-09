import { useEffect, useState } from 'react';
import PieCharts from '../../Template/Chart/PieChart';
import { Card, Col, Row, Tag } from 'antd';
import axios from 'axios';
interface PieChartInterface{
  selectedRange:any;
}
const PieChart = ({selectedRange}:PieChartInterface) => {
    const [data,setData] = useState<any>([]);
    useEffect(()=>{
      const params = {
        startDate : selectedRange[0],
        endDate : selectedRange[1]
      }
      axios.get('http://localhost:8081/match',{params})
      .then(res => {
          let winCount = 0;
          let loseCount = 0;
          let drawCount = 0;

          res.data.map((dt:any) => {
              if(dt.homename == "Lakers"){
                  dt.homescore > dt.awayscore ? winCount++ : dt.homescore == dt.awayscore ? drawCount++ : loseCount++
              }
              if(dt.awayname == "Lakers"){
                  dt.awayscore > dt.homescore ? winCount++ : dt.awayscore == dt.homescore ? drawCount++  : loseCount++
              }
          })
          
          setData([{ value: winCount, name: 'Win',itemStyle: { color: '#52c41a' }  },
          { value: loseCount, name: 'Lose',itemStyle: { color: '#fa541c' }  },
          { value: drawCount, name: 'Draw',itemStyle: { color: 'grey' }  }]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },[selectedRange])

  const pieChartMetaData = {
    'title': {
      text: 'Win / Lose / Draw',
      subtext: 'Statistics',
      left: 'center',
      textStyle:{
        color:"#4a2381"
      },
      subtextStyle:{
        color:"#4a2381"
      }
    },
    'series': [
      {
        type: 'pie',
        radius: '50%',
        label: {
            show: true, 
            formatter: '{b}: {d}%' 
          },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  
  return (
    <>
        <Card loading={false} >
          <PieCharts metaData = {pieChartMetaData} data={data}/>  
        </Card>
    </>
  );
}
export default PieChart;