import PieChart from "../../components/Home/PieChart/PieChart";
import ScoreTable from "../../components/Home/ScoreTable/ScoreTable";
import { Card, Col, Row } from 'antd';
import LineChart from "../../components/Home/LineChart/LineChart";
import HighestCard from "../../components/Home/Card/HighestCard";
import LowestCard from "../../components/Home/Card/LowestCard";
import TotalMatchCard from "../../components/Home/Card/TotalMatchCard";
import TotalPointCard from "../../components/Home/Card/TotalPointCard";
import FrequentlyOpponentCard from "../../components/Home/Card/FrequentlyOpponentCard";
const Home = () => {
  return (
    <>
      <Row gutter ={[20,20]} style={{ marginTop: '10px' }}>
        <Col span={24} >
          <Card loading={false} >
            <LineChart />  
          </Card>
        </Col>
      </Row>
      <Row gutter ={[20,20]} style={{ marginTop: '10px' }}>
        <Col span={24}>
          <Card loading={false} >
            <ScoreTable/> 
          </Card>
        </Col>
      </Row>
      <Row gutter ={[20,20]} style={{ marginTop: '10px' }}>
        <Col span={12}>
        <Card loading={false} >
          <PieChart/>  
        </Card>
        </Col>
        <Col span={12}>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24}>
              <HighestCard/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24} >
              <LowestCard/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24}>
              <TotalMatchCard/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24} >
              <TotalPointCard/>
            </Col>
          </Row>
          <Row style={{ marginBottom:'4px' }}>
            <Col span={24} >
              <FrequentlyOpponentCard/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default Home;