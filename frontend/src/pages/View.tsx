import Message from "../components/Message.tsx";
import FoodItem from "../components/FoodItem.tsx";
import axios from "axios";
import { useState, useEffect } from "react";

function View() {
    const [array, setArray] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/view");
        setArray(response.data.foodList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Message text="Recipe List" />
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {array?.map((item, index) => (
                    <FoodItem key={index} data={item} />
                ))}
            </div>
        </>
    );
}

export default View;
