import axios from 'axios';
import CardTemplate from '../../Template/Card';
import { useEffect, useState } from 'react';
import arrowIcon from './../../../assets/arrow-down.png'


const TotalMatchCard = () => {
  const [data,setData] = useState<string>();
  useEffect(()=>{
      axios.get('http://localhost:8081/match')
      .then(res => {
          let lowPoint = 0
          let teamName

          res.data.map((dt:any) => {
              if(dt.homename == "Lakers"){
                  if(dt.homescore < dt.awayscore ){
                    teamName = dt.awayname
                    lowPoint = dt.homescore
                  }
              }
              
              if(dt.awayname == "Lakers"){
                  if(dt.awayscore < dt.homescore){
                    teamName = dt.homename
                    lowPoint = dt.awayscore
                  }
              }
          })
          
          setData('against ' + teamName + " ( " + lowPoint + " points )");
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },[])
  return (
    <>
    <CardTemplate title={"Total Match Played"} description={data} avatar={arrowIcon}/>
    </>
  );
};

export default TotalMatchCard;