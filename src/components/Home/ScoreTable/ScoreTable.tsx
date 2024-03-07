import { Card, Tag } from 'antd';
import TableTemplate from '../../Template/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ScoreTable = () => {
    const [data,setData] = useState([]);

    const scoreTableColumns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          sorter: (a : any, b: any) =>{
                    if (a['date'] < b['date']) return -1;
                    if (a['date'] > b['date']) return 1;
                    return 0;
                  } 
    
        },
        {
          title: 'Home',
          dataIndex: 'home',
          key: 'home',
          // render: (text) => <a>{text}</a>,
        },
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
          // children: [
          //     {
          //       title: '',
          //       dataIndex: 'homescore',
          //       key: 'homescore',
          //     },
          //     {
          //       title: '',
          //       dataIndex: 'awayscore',
          //       key: 'awayscore',
          //     },
          //   ],
        },
        {
          title: 'Away',
          dataIndex: 'away',
          key: 'away',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (tags : string) => (
            <>
              <Tag color={tags == "Win" ? "green-inverse" : tags == "Draw" ? "grey" : "volcano-inverse"}>
                    {tags}
              </Tag>
            </>
          ),
          filters: [
              {
                text: 'Win',
                value: 'Win',
              },
              {
                text: 'Lose',
                value: 'Lose',
              },
              {
                text: 'Draw',
                value: 'Draw',
              }
          ],
          onFilter: (value: string, data:any) => data.tags.startsWith(value),
          filterSearch: true,
        },
      ];
      
      useEffect(()=>{
        axios.get('http://localhost:8081/match')
        .then(res => {
            let parsedData = []

           parsedData= res.data.map((dt:any) => {
                let final = "Draw"
                if(dt.homename == "Lakers"){
                    final = dt.homescore > dt.awayscore ? "Win" : dt.homescore == dt.awayscore ? "Draw" : "Lose"
                }
                if(dt.awayname == "Lakers"){
                    final = dt.awayscore > dt.homescore ? "Win" : dt.awayscore == dt.homescore ? "Draw" : "Lose"
                }
                return{
                    date: dt.date,
                    home: dt.homename,
                    score: dt.homescore + ' - ' + dt.awayscore,
                    away: dt.awayname,
                    tags: final,
                }
            })

            setData(parsedData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      },[])
   
    return (
        <Card loading={false} >
            <TableTemplate data = {data} column={scoreTableColumns} />
        </Card>
    )
};

export default ScoreTable;