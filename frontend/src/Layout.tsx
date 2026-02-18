import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-500">
                <Navbar />
            </header>

            <main className="grow w-[90%] max-w-5xl mx-auto py-8">
                <Outlet />
            </main>

            <footer className="bg-green-500">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
