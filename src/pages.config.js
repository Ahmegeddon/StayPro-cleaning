import AirbnbCleaning from './pages/AirbnbCleaning';
import AirbnbManagement from './pages/AirbnbManagement';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OtherServices from './pages/OtherServices';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AirbnbCleaning": AirbnbCleaning,
    "AirbnbManagement": AirbnbManagement,
    "Contact": Contact,
    "Home": Home,
    "OtherServices": OtherServices,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};