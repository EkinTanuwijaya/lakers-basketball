import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import arrowIcon from './../../../assets/arrow-up.png'

const HighestCard = () => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
      axios.get('http://localhost:8081/match')
      .then(res => {
          let highPoint = 1000
          let teamName

          res.data.map((dt:any) => {
              if(dt.homename == "Lakers"){
                  if(dt.homescore > dt.awayscore ){
                    teamName = dt.awayname
                    highPoint = dt.homescore
                  }
              }
              
              if(dt.awayname == "Lakers"){
                  if(dt.awayscore > dt.homescore){
                    teamName = dt.homename
                    highPoint = dt.awayscore
                  }
              }
          })
          
          setData('against ' + teamName + " ( " + highPoint + " points )");
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },[])
  return (
    <>
    <CardTemplate title={"Most Highest Scored Point"} description={data} avatar={arrowIcon}/>
    </>
  );
};

export default HighestCard;