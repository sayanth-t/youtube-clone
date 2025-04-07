import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from './SideBar';
import { useSelector } from 'react-redux';

const Body = () => {

    const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);

    return (
        <div>

            <Header/>

            <div className="flex">
                {/* side bar section */}
                {isSideBarOpen && <SideBar />}

                <div className="flex-1">
                    <Outlet/>
                </div>
            </div>

        </div>
    );
}

export default Body;
