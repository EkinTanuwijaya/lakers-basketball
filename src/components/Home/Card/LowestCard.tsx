import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import arrowIcon from './../../../assets/arrow-down.png'

interface LowestCardInterface{
  selectedRange:any;
}
const LowestCard = ({selectedRange}:LowestCardInterface) => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
  const params = {
    startDate : selectedRange[0],
    endDate : selectedRange[1]
  }
    axios.get('http://localhost:8081/match',{params})
    .then(res => {
        let lowPoint = 1000

        res.data.map((dt:any) => {
            if(dt.homename == "Lakers"){
                if(dt.homescore < lowPoint ){
                  lowPoint = dt.homescore
                }
            }
            
            if(dt.awayname == "Lakers"){
                if(dt.awayscore < lowPoint){
                  lowPoint = dt.awayscore
                }
            }
        })
        
        setData(('' + (lowPoint == 1000 ? "-" : lowPoint) + " Points"));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[selectedRange])
  return (
    <>
    <CardTemplate title={"Most Lowest Scored Point"} description={data} avatar={arrowIcon}/>
    </>
  );
};

export default LowestCard;