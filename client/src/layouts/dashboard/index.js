import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

const DashboardLayout = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    );
};

export default DashboardLayout;
