import Home from './pages/Home';
import AirbnbCleaning from './pages/AirbnbCleaning';
import OtherServices from './pages/OtherServices';
import Contact from './pages/Contact';
import AirbnbManagement from './pages/AirbnbManagement';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AirbnbCleaning": AirbnbCleaning,
    "OtherServices": OtherServices,
    "Contact": Contact,
    "AirbnbManagement": AirbnbManagement,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};