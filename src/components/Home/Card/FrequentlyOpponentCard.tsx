import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import opponentIcon from './../../../assets/Opponent.png'
interface FrequentlyOpponentCardInterface{
  selectedRange:any;
}
const FrequentlyOpponentCard = ({selectedRange}:FrequentlyOpponentCardInterface) => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
    const params = {
      startDate : selectedRange[0],
      endDate : selectedRange[1]
    }
    axios.get('http://localhost:8081/match',{params})
    .then(res => {
        let team:any = {}
        res.data.map((dt:any) => {
            if(dt.homename == "Lakers"){
              team[dt.awayname] = (team[dt.awayname] || 0) + 1;
            }
            
            if(dt.awayname == "Lakers"){
              team[dt.homename] = (team[dt.homename] || 0) + 1;
            }
        })
       let maxCount = 0;
       let maxTeam = "";
       const keys = Object.keys(team);
       keys.forEach((key) => {
          if(maxCount < team[key]){
            maxCount = team[key]
            maxTeam = key
          }
        });
        setData(maxTeam + (" (" + maxCount + " Matches)"));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[selectedRange])
  return (
    <>
    <CardTemplate title={"Most Frequently Opponent"} description={data} avatar={opponentIcon}/>
    </>
  );
};

export default FrequentlyOpponentCard;