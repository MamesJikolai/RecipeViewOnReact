import { useState } from "react";
import type { ChangeEvent } from "react";

interface IngredientsProps {
    ingredientsList: string[];
    onIngredientsChange: (newIngredients: string[]) => void;
}

function FoodInputIngredients({
    ingredientsList,
    onIngredientsChange,
}: IngredientsProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    function handleAddIngredient() {
        if (inputValue.trim() === "") {
            return;
        }

        const updatedList = [...ingredientsList, inputValue.trim()];

        onIngredientsChange(updatedList);

        setInputValue("");
    }

    function handleRemoveIngredient(itemToRemove: string) {
        const updatedList = ingredientsList.filter(
            (item) => item !== itemToRemove,
        );
        onIngredientsChange(updatedList);
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            handleAddIngredient();
        }
    }

    return (
        <>
            <label>
                <span className="font-bold">Ingredients</span>
                <br />
                <div className="flex">
                    <input
                        type="text"
                        name="ingredients"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        className="bg-white px-1 w-full max-w-125 py-0.5"
                    />
                    <button
                        type="button"
                        onClick={handleAddIngredient}
                        className="cursor-pointer"
                    >
                        Add
                    </button>
                </div>
            </label>

            <div>
                {ingredientsList.map((ingredient) => (
                    <label key={ingredient} className="flex cursor-pointer">
                        <input
                            type="checkbox"
                            checked={true}
                            onChange={() => handleRemoveIngredient(ingredient)}
                        />
                        {ingredient}
                    </label>
                ))}
            </div>
        </>
    );
}

export default FoodInputIngredients;
