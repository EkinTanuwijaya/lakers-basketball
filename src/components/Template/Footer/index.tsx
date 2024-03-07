import { Layout } from 'antd';
const { Footer} = Layout;


const SideMenu = () => {

  return (
    <>
    <Layout>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </Layout>
      
    </>
  );
};

export default SideMenu;