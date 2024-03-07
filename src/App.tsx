import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
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
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
          <img src={LakersLogo} alt="Logo" style={{ width: '100px' }}/>
          <img src={LakersWord} alt="Logo"style={{ width: '500px' }}/>
        </Header>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
            <div className="demo-logo-vertical" />
            <Menu theme="dark"  mode="inline"  selectedKeys={[selectedKey]}>
                <Menu.Item key="/" icon={<PieChartOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/PlayerList" icon={<DesktopOutlined />}>
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
            <Footer style={{ textAlign: 'center' }}>
              Lakers ©{new Date().getFullYear()} Created by Ekin Tanuwijaya
            </Footer>
          </Layout>
        </Layout>
      {/* </Router> */}
     
    </>
    
  );
};

export default App;