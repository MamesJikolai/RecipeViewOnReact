import { Link } from "react-router-dom";
import panLogo from "../assets/frying-pan-32px.png";

const navLinks = [
    { title: "Home", link: "/" },
    { title: "View", link: "/view" },
    { title: "Add", link: "/add" },
];

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center my-4">
                {/* logo */}
                <a href="">
                    <img src={panLogo} alt="React Logo" className="w-10 h-10" />
                </a>

                {/* nav links */}
                <div>
                    {navLinks.map(({ title, link }, index) => (
                        <Link
                            key={index}
                            to={link}
                            className="hover:bg-red-500 px-4 py-2 ml-4"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;
