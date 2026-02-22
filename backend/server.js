import express from "express";
import cors from "cors";
import foodList from "./data/data.json" with { type: "json" };
import fs from "fs/promises";

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/view", (req, res) => {
    res.json({ foodList: foodList });
});

app.post("/add", async (req, res) => {
    const newFoodItem = req.body;
    console.log("Received new food item: ", newFoodItem);

    try {
        // 1. Read the current data from the array
        const rawData = await fs.readFile("./data/data.json", "utf-8");
        const database = JSON.parse(rawData);

        // 2. Format the incoming data to perfectly match your database structure!
        const formattedItem = {
            name: newFoodItem.foodName,
            type: newFoodItem.foodType,
            tags: newFoodItem.recipeTags,
            image: newFoodItem.imageLink,
            ingredients: newFoodItem.ingredients,
        };

        // 3. Push the formatted item directly into the array (Fixed the crash!)
        database.push(formattedItem);

        // 4. Turn it back into a text string
        const updatedDataString = JSON.stringify(database, null, 4);

        // 5. Overwrite the data.json file
        await fs.writeFile("./data/data.json", updatedDataString);

        res.status(200).json({
            message: "Item added successfully",
            item: formattedItem,
        });
    } catch (error) {
        console.error("Error saving to database:", error);
        res.status(500).json({ message: "Failed to save the recipe." });
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
