import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import panLogo from "../assets/frying-pan-32px.png";

const navLinks = [
    { title: "Home", link: "/" },
    { title: "View", link: "/view" },
    { title: "Add", link: "/add" },
];

function Navbar() {
    return (
        <div className="flex justify-between items-center my-4 w-[90%] max-w-5xl mx-auto">
            {/* logo */}
            <Link to="/">
                <img src={panLogo} alt="Pan Logo" className="w-10 h-10" />
            </Link>

            {/* nav links */}
            <div>
                {navLinks.map(({ title, link }, index) => (
                    <NavLink
                        key={index}
                        to={link}
                        className={
                            ({ isActive }) =>
                                isActive
                                    ? "font-bold border-b-2 border-red-600 px-4 py-2 ml-2" //Active
                                    : "hover:bg-red-500 px-4 py-2 ml-2" //Inactive
                        }
                    >
                        {title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
