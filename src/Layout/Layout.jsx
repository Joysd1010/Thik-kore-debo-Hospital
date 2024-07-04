
import { Outlet } from 'react-router-dom';
import Header from '../Shared/HeaderSection/Header';
import Footer from '../Shared/Footer Section/Footer';

const Layout = () => {
    return (
        <div className=' bg-white text-black'>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default Layout;