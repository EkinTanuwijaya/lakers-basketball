import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import arrowIcon from './../../../assets/arrow-up.png'
interface HighestCardInterface{
  selectedRange:any;
}
const HighestCard = ({selectedRange}:HighestCardInterface) => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
    const params = {
      startDate : selectedRange[0],
      endDate : selectedRange[1]
    }
    axios.get('http://localhost:8081/match',{params})
    .then(res => {
        let highPoint = 0

        res.data.map((dt:any) => {
            if(dt.homename == "Lakers"){
                if(dt.homescore > highPoint ){
                  highPoint = dt.homescore
                }
            }
            
            if(dt.awayname == "Lakers"){
                if(dt.awayscore > highPoint){
                  highPoint = dt.awayscore
                }
            }
        })
        
        setData('' + (highPoint == 0 ? "-" : highPoint) + " Points");
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[selectedRange])
  return (
    <>
    <CardTemplate title={"Most Highest Scored Point"} description={data} avatar={arrowIcon}/>
    </>
  );
};

export default HighestCard;