import express from "express";
import cors from "cors";
import foodList from "./data/data.json" with { type: "json" };

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/view", (req, res) => {
    res.json({ foodList: foodList });
});

app.post("/add", (req, res) => {
    // Logic to add food item
    const newFoodItem = req.body; // Assuming the new food item is sent in the request body
    console.log("Received new food item: ", newFoodItem);

    // Send a JSON response back to the client
    res.status(200).json({
        message: "Item added successfully",
        item: newFoodItem,
    });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
