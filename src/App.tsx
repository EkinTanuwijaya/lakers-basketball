import React, { useEffect, useState } from 'react';
import {
  TeamOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import { Link, Route, Routes, useLocation} from 'react-router-dom';
import PlayerList from './dashboard/PlayerList';
import Home from './dashboard/Home';
import LakersLogo from './assets/Lakers.png'
import LakersWord from './assets/LakersWord.png'

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>('');

  useEffect(() => {
    const path = location.pathname;
    setSelectedKey(path);
  }, [location]);

  return (
    <>
      {/* <Router> */}
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', backgroundColor:'rgb(252, 185, 34)'}}>
          <img src={LakersLogo} alt="Logo" style={{ width: '100px' }}/>
          <img src={LakersWord} alt="Logo"style={{ width: '180px' }}/>
        </Header>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}  style={{ backgroundColor:'#4a2381'}}
            trigger={<div style={{ backgroundColor:"#4a2381",color: 'rgb(252, 185, 34)', fontSize: '20px', textAlign: 'center' }}>{collapsed ? '>' : '<'}</div>}
          >
            <div className="demo-logo-vertical" style={{ backgroundColor:'white' }}/>
            <Menu theme="light"  mode="inline"  selectedKeys={[selectedKey]} style={{ backgroundColor:"#4a2381" }}> 
                <Menu.Item key="/" icon={<PieChartOutlined />} style={{ backgroundColor : selectedKey == "/"? "rgb(252, 185, 34)" : '#4a2381', color : selectedKey == "/"? "#4a2381":'white' }}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/PlayerList" icon={<TeamOutlined /> }style={{ backgroundColor : selectedKey == "/PlayerList"? "rgb(252, 185, 34)" : '#4a2381' , color : selectedKey == "/PlayerList"? "#4a2381":'white'}}>
                  <Link to="/PlayerList">Player List</Link>
                </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/PlayerList" element = {<PlayerList/>}/>
              </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' , color:'#4a2381'}}>
              Lakers ©{new Date().getFullYear()} Created by Ekin Tanuwijaya
            </Footer>
          </Layout>
        </Layout>
      {/* </Router> */}
     
    </>
    
  );
};

export default App;