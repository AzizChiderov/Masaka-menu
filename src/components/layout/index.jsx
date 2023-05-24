import { Outlet } from "react-router"
import { Nav } from '../nav/index'


export const Layout = () => {
    return (
        <>
        <Nav />
        <Outlet />
        </>
    )
}