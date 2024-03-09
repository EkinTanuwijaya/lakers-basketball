import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import scoreIcon from './../../../assets/Score.png'

interface TotalPointCardInterface{
  selectedRange:any;
}
const TotalMatchCard = ({selectedRange}:TotalPointCardInterface) => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
    const params = {
      startDate : selectedRange[0],
      endDate : selectedRange[1]
    }
    axios.get('http://localhost:8081/match',{params})
    .then(res => {
        let totalPoint = 0

        res.data.map((dt:any) => {
            if(dt.homename == "Lakers"){
                totalPoint += dt.homescore
            }
            
            if(dt.awayname == "Lakers"){
                totalPoint += dt.awayscore
            }
        })
        
        setData( totalPoint + (totalPoint > 1 ? " Points" : " Point"));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[selectedRange])
  return (
    <>
    <CardTemplate title={"Total Point Scored"} description={data} avatar={scoreIcon}/>
    </>
  );
};

export default TotalMatchCard;