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
    try {
        res.json({ foodList: foodList });
    } catch (error) {
        console.error("Error fetching from database:", error);
        res.status(500).json({ message: "Failed to fetch the recipe list." });
    }
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
            id: Date.now().toString(),
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

app.put("/update/:id", async (req, res) => {
    const recipeIdToUpdate = req.params.id;
    const incomingUpdates = req.body;

    try {
        const rawData = await fs.readFile("./data/data.json", "utf-8");
        const database = JSON.parse(rawData);

        const updatedDatabase = database.map((item) => {
            if (item.id === recipeIdToUpdate) {
                // Return the item with the newly updated properties
                return {
                    id: item.id, // Keep original ID
                    name: incomingUpdates.name,
                    type: incomingUpdates.type,
                    tags: incomingUpdates.tags,
                    image: incomingUpdates.image,
                    ingredients: incomingUpdates.ingredients,
                };
            }
            // CRITICAL: You must return the unmodified items too!
            return item;
        });

        await fs.writeFile(
            "./data/data.json",
            JSON.stringify(updatedDatabase, null, 4),
        );
        res.status(200).json({ message: "Recipe updated successfully" });
    } catch (error) {
        console.error("Error updating database:", error);
        res.status(500).json({ message: "Failed to update the recipe." });
    }
});

app.delete("/delete/:id", async (req, res) => {
    const recipeIDToDelete = req.params.id;

    try {
        const rawData = await fs.readFile("./data/data.json", "utf-8");
        const database = JSON.parse(rawData);

        const updatedDatabase = database.filter(
            (item) => item.id !== recipeIDToDelete,
        );

        await fs.writeFile(
            "./data/data.json",
            JSON.stringify(updatedDatabase, null, 4),
        );

        res.status(200).json({
            message: "Recipe deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting from database:", error);
        res.status(500).json({ message: "Failed to delete the recipe." });
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
