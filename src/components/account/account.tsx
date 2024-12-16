import Header from "../header/header.tsx";
import Footer from "../footer/footer.tsx";
import {Outlet} from "react-router-dom";
import React from "react";

const Account: React.FC = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Account