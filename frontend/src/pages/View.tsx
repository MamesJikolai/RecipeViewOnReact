import Message from "../components/Message.tsx";
import FoodItem from "../components/FoodItem.tsx";
import FilterView from "../components/FilterView.tsx";
import axios from "axios";
import { useState, useEffect } from "react";

interface FoodData {
    name: string;
    type: string;
    tags: string[];
    image: string;
    ingredients: string[];
}

function View() {
    const [allRecipes, setAllRecipes] = useState<FoodData[]>([]);
    const [displayedRecipes, setDisplayedRecipes] = useState<FoodData[]>([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/view");
        setAllRecipes(response.data.foodList);
        setDisplayedRecipes(response.data.foodList);
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
                    <FoodItem key={index} data={item} />
                ))}
            </div>
        </>
    );
}

export default View;
