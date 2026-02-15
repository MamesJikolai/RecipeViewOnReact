import Message from "./Message.tsx";
import Navbar from "./components/Navbar.tsx";

function Home() {
    return (
        <>
            <Navbar />
            <Message text="Home" />
        </>
    );
}

export default Home;
