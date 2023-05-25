import { Outlet } from "react-router"
import  Nav  from "../nav"

export const Layout = () => {
    return (
        <>
        <Nav/>
        <Outlet />
        </>
    )
}