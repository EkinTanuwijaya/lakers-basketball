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
import './../../../index.css'
import PlayerListBarChart from "../BarChart/PlayerListBarChart";
import LakersLogo from './../../../assets/Lakers.png'

interface PlayerDetailCardInterface{
    show:any;
    id: any;
    data:any;
}
const PlayerDetailCard = ({show,id,data}:PlayerDetailCardInterface) => {
    console.log(data)
    const image = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11
        ,image12,image13,image14,image15,image16,image17,image18,image19]
  return (
    <Card style={{ backgroundColor:"rgb(252, 185, 34)", paddingBottom:"60px" }}>
        <h1 style={{ display:"flex", justifyContent:'center' , color:"#4a2381", marginBottom:"70px", fontSize:"30pt"}}>2023 - 2024 Season Stats</h1>     

        <Row gutter={[20,20]} style={{ marginTop:'10px', marginBottom:"35px" , display:"flex" , justifyContent:"center"}}>
            <Col span={14} style={{ display: 'flex' , alignItems:'center', justifyContent:"center"}}>
                    <img alt="example" src={image[id-1]} style={{ width: "300px", zIndex:2}}/>
                    <img alt="example" src={LakersLogo} style={{ width: "450px", position: "absolute", zIndex:1, left:-45 , top:-120, opacity:0.6}}
                    />
                    <div style={{ color:'#4a2381' , zIndex:2}}>
                        <span style={{ fontSize:"28pt"}}><b>{id != -1 ? data[id-1].name : null}</b></span>   
                        <div style={{fontSize:"16pt"}}> {id != -1 ?"#" + data[id-1].backnumber:null}</div>  
                        <span style={{fontSize:"18pt"}}> { id != -1 ? data[id-1].positionName + " ("+ data[id-1].positionID + ")" : null}</span>
                    </div>      
            </Col>
            <Col span={10} style={{ display: 'flex' , alignItems:'center' , flexDirection:"column", justifyContent:'center'}}>
                    <PlayerListBarChart id={id} data={show?data:null}/>
            </Col>
        </Row>
        {/* <Row gutter={[20,20]} style={{ marginTop:'10px' }}>
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
        </Row>     */}
    </Card>
  );
};

export default PlayerDetailCard;