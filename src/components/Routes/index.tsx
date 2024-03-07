import { Layout } from 'antd';
import {Route, BrowserRouter, Routes as RouterRoutes} from 'react-router-dom';
import PlayerList from '../../dashboard/PlayerList';
import Home from '../../dashboard/Home';
const {Footer} = Layout;

const Routes = () => {
  return (
    <>
        <BrowserRouter>
            <RouterRoutes>
                {/* <Route path="/" element={<Home />}></Route>
                <Route path="/PlayerList" element={<PlayerList />}></Route> */}
            </RouterRoutes>
        </BrowserRouter>
       
    </>
  );
};

export default Routes;