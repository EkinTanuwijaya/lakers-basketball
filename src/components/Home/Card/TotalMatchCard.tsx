import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import basketballIcon from './../../../assets/Basketball.png'

interface TotalMatchCardInterface{
  selectedRange:any;
}
const TotalMatchCard = ({selectedRange}:TotalMatchCardInterface) => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
    const params = {
      startDate : selectedRange[0],
      endDate : selectedRange[1]
    }
    axios.get('http://localhost:8081/matchplayed',{params})
    .then(res => {
        setData(res.data[0].count + (res.data[0].count > 1 ? " Matches" : " Match"));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[selectedRange])
  return (
    <>
    <CardTemplate title={"Total Match Played"} description={data} avatar={basketballIcon}/>
    </>
  );
};

export default TotalMatchCard;