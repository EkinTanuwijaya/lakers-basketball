import { useEffect, useState } from "react";
import CardTemplateV2 from "../../Template/CardV2";
import axios from "axios";
import { Col, Row } from "antd";
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import image4 from '../../../assets/4.png'
import image5 from '../../../assets/5.png'
import image6 from '../../../assets/6.png'
import image7 from '../../../assets/7.png'
import image8 from '../../../assets/8.png'
import image9 from '../../../assets/9.png'
import image10 from '../../../assets/10.png'
import image11 from '../../../assets/11.png'
import image12 from '../../../assets/12.png'
import image13 from '../../../assets/13.png'
import image14 from '../../../assets/14.png'
import image15 from '../../../assets/15.png'
import image16 from '../../../assets/16.png'
import image17 from '../../../assets/17.png'
import image18 from '../../../assets/18.png'
import image19 from '../../../assets/19.png'
import Card from "antd/es/card/Card";



const PlayerListCard = () => {
    const [show,setShow] = useState(false);
    const [id,setId] = useState<number>(-1);
    const [data,setData] = useState<any>([]);
    const image = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11
        ,image12,image13,image14,image15,image16,image17,image18,image19]

    useEffect(()=>{
        axios.get('http://localhost:8081/player')
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },[show,id])
  return (
    <>
        <h1 style={{ display: show? 'flex' : 'none' , justifyContent:'center'}}>2023 - 2024 Season Stats</h1>     

        <Row gutter={[20,20]} style={{ marginTop:'10px' }}>
            <Col span={24} style={{ display: show? 'flex' : 'none' , justifyContent:'center'}}>
                <Card>
                    <h1 style={{ display:"flex", justifyContent:"center"}}>{id != -1 ? data[id-1].name : null}</h1>     
                    <img alt="example" src={image[id-1]} style={{ width: "300px"}}/>
                    <h1 style={{ display:"flex", justifyContent:"center"}}>{id != -1 ? "#"+data[id-1].backnumber: null}</h1>     
                </Card> 
            </Col>
        </Row>
        <Row gutter={[20,20]} style={{ marginTop:'10px' }}>
            <Col span={6} style={{ display: show? 'flex' : 'none' }}>
                <Card>
                    <h2 style={{ display:"flex", justifyContent:"center"}}>Position</h2>     
                    <h2 style={{ display:"flex", justifyContent:"center",width: "270px"}}>{id != -1 ? data[id-1].positionName + " ("+ data[id-1].positionID + ")": null}</h2>     
                </Card>  
            </Col>
            <Col span={6} style={{ display: show? 'flex' : 'none' }}>
                <Card>
                    <h2 style={{ display:"flex", justifyContent:"center"}}>Points</h2>     
                    <h1 style={{ display:"flex", justifyContent:"center",width: "270px"}}>{id != -1 ? data[id-1].points:null}</h1>     
                </Card>  
            </Col>
            <Col span={6} style={{ display: show? 'flex' : 'none' }}>
                <Card>
                    <h2 style={{ display:"flex", justifyContent:"center"}}>Rebound</h2>     
                    <h1 style={{ display:"flex", justifyContent:"center",width: "270px"}}>{id != -1 ? data[id-1].rebound : null}</h1>     

                </Card>  
            </Col>
            <Col span={6} style={{ display: show? 'flex' : 'none' }}>
                <Card>
                    <h2 style={{ display:"flex", justifyContent:"center"}}>Assist</h2>     
                    <h1 style={{ display:"flex", justifyContent:"center",width: "270px"}}>{id != -1 ? data[id-1].assist:null}</h1>     

                </Card>  
            </Col>
        </Row>
    
        <Row gutter={[20,20]} style={{ marginTop:'10px' }}>
        <Col span={24}>
            <h1 style={{ display:"flex", justifyContent:"center"}}>Player List</h1>     
        </Col>
        {data.map((dt:any,index:number)=>{
            return(
                <Col span={6} style={{ padding:'4px' }}>
                    <CardTemplateV2 
                        title={dt.name} 
                        description={"Position : " + dt.positionName + " (" + dt.positionID + ")" }
                        avatar={image[index]}
                        number={dt.backnumber}
                        setShow={setShow}
                        show={show}
                        id={dt.id}
                        setId={setId}
                        currentId={id}
                    />
                </Col>
            )
        })}
        </Row>
        
        
    </>
  );
};

export default PlayerListCard;