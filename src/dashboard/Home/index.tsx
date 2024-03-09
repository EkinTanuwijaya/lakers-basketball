import PieChart from "../../components/Home/PieChart/PieChart";
import ScoreTable from "../../components/Home/ScoreTable/ScoreTable";
import { Card, Col, Row } from 'antd';
import LineChart from "../../components/Home/LineChart/LineChart";
import HighestCard from "../../components/Home/Card/HighestCard";
import LowestCard from "../../components/Home/Card/LowestCard";
import TotalMatchCard from "../../components/Home/Card/TotalMatchCard";
import TotalPointCard from "../../components/Home/Card/TotalPointCard";
import FrequentlyOpponentCard from "../../components/Home/Card/FrequentlyOpponentCard";
import HomeForm from "../../components/Home/Form/HomeForm";
import { useState } from "react";
import { Dayjs } from "dayjs";
const Home = () => {
  const [selectedRange, setSelectedRange] = useState<[Dayjs | string | null, Dayjs | string| null]>([null, null]);
  return (
    <>
      <Row gutter ={[20,20]} style={{ marginTop: '10px' }}>
        <Col span={24} >
          <Card loading={false} style={{ display:"flex",justifyContent:"center" , border: '1px solid rgb(252, 185, 34)', boxShadow: '0 0 10px rgba(252, 185, 34, 0.5)'}}>
            <LineChart />  
          </Card>
        </Col>
      </Row>
      <Row gutter ={[20,20]} style={{ marginTop: '10px' }}>
        <Col span={24}>
          <Card loading={false} style={{ border: '1px solid rgb(252, 185, 34)', boxShadow: '0 0 10px rgba(252, 185, 34, 0.5)' }}>
            <center><h1 style={{ color:"#4a2381" }}>2023-2024 Lakers Match</h1></center>
            <HomeForm selectedRange={selectedRange} setSelectedRange={setSelectedRange}/>
            <ScoreTable selectedRange={selectedRange}/> 
          </Card>
        </Col>
      </Row>
      <Row gutter ={[20,20]} style={{ marginTop: '10px' }}>
        <Col span={12}>
        <Card loading={false}  style={{ border: '1px solid rgb(252, 185, 34)', boxShadow: '0 0 10px rgba(252, 185, 34, 0.5)' }}>
          <PieChart selectedRange={selectedRange}/>  
        </Card>
        </Col>
        <Col span={12}>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24}>
              <HighestCard selectedRange={selectedRange}/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24} >
              <LowestCard selectedRange={selectedRange}/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24}>
              <TotalMatchCard selectedRange={selectedRange}/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24} >
              <TotalPointCard selectedRange={selectedRange}/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24} >
              <FrequentlyOpponentCard selectedRange={selectedRange}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default Home;