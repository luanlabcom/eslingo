import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
    const styles = {
        color: "red",
        fontWeight: "bold"
    }
    return (
        <div>
            
            <div className="flex gap-4 justify-between">
                <h1>Effortless Lingo</h1>
                <div className="flex gap-4">
                    <NavLink className="bg-neutral-500" style={ ({ isActive }) => isActive ? styles: null  } to="/">Study</NavLink>
                    <NavLink className="bg-neutral-500" style={ ({ isActive }) => isActive ? styles: null } to="/practice">Practice</NavLink>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}