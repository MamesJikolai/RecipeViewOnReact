import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-emerald-600">
                <Navbar />
            </header>

            <main className="bg-slate-50 py-10 grow">
                <div className="w-[90%] max-w-5xl mx-auto py-8">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-emerald-600">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
