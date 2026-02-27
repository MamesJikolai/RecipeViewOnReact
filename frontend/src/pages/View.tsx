import Message from "../components/Message.tsx";
import FoodItem from "../components/FoodItem.tsx";
import FilterView from "../components/FilterView.tsx";
import type { FoodData } from "../components/FoodItem.tsx";
import axios from "axios";
import { useState, useEffect } from "react";

function View() {
    const [allRecipes, setAllRecipes] = useState<FoodData[]>([]);
    const [displayedRecipes, setDisplayedRecipes] = useState<FoodData[]>([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/view");
        setAllRecipes(response.data.foodList);
        setDisplayedRecipes(response.data.foodList);
    };

    const updateData = async (updatedData: FoodData) => {
        try {
            await axios.put(
                `http://localhost:8080/update/${updatedData.id}`,
                updatedData,
            );

            setAllRecipes((prev) =>
                prev.map((recipe) =>
                    recipe.id === updatedData.id ? updatedData : recipe,
                ),
            );
            setDisplayedRecipes((prev) =>
                prev.map((recipe) =>
                    recipe.id === updatedData.id ? updatedData : recipe,
                ),
            );
        } catch (error) {
            console.error("Failed to update", error);
        }
    };

    const deleteData = async (idToDelete: string) => {
        if (!window.confirm("Are you sure you want to delete this recipe?"))
            return;

        try {
            await axios.delete(`http://localhost:8080/delete/${idToDelete}`);
            setAllRecipes((prev) =>
                prev.filter((recipe) => recipe.id !== idToDelete),
            );
            setDisplayedRecipes((prev) =>
                prev.filter((recipe) => recipe.id !== idToDelete),
            );
        } catch (error) {
            console.error("Failed to delete", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function applyFilters(filterCriteria: any) {
        let filtered = [...allRecipes];

        if (filterCriteria.foodName !== "") {
            filtered = filtered.filter((recipe) =>
                recipe.name
                    .toLowerCase()
                    .includes(filterCriteria.foodName.toLowerCase()),
            );
        }
        if (filterCriteria.foodType !== "") {
            filtered = filtered.filter((recipe) =>
                recipe.type
                    .toLowerCase()
                    .includes(filterCriteria.foodType.toLowerCase()),
            );
        }
        if (filterCriteria.recipeTags.length > 0) {
            filtered = filtered.filter((recipe) =>
                filterCriteria.recipeTags.every((selectedTag: string) =>
                    recipe.tags.includes(selectedTag),
                ),
            );
        }
        if (filterCriteria.ingredients.length > 0) {
            filtered = filtered.filter((recipe) =>
                filterCriteria.ingredients.every((selectedIngredient: string) =>
                    recipe.ingredients.some((recipeIngredient: string) =>
                        recipeIngredient
                            .toLowerCase()
                            .includes(selectedIngredient.toLowerCase()),
                    ),
                ),
            );
        }

        setDisplayedRecipes(filtered);
    }

    return (
        <>
            <Message text="Recipe List" />

            {/* Filter? */}
            <FilterView onFilterChange={applyFilters} />

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {displayedRecipes?.map((item, index) => (
                    <FoodItem
                        key={index}
                        data={item}
                        onDelete={deleteData}
                        onUpdate={updateData}
                    />
                ))}
            </div>
        </>
    );
}

export default View;
