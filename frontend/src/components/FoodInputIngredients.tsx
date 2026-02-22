import { useState } from "react";
import type { ChangeEvent } from "react";

interface IngredientsProps {
    ingredientsList: string[];
    onIngredientsChange: (newIngredients: string[]) => void;
    capitalizeWords: (str: string) => string;
}

function FoodInputIngredients({
    ingredientsList,
    onIngredientsChange,
    capitalizeWords,
}: IngredientsProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    function handleAddIngredient() {
        if (inputValue.trim() === "") {
            return;
        }

        const updatedList = [
            ...ingredientsList,
            capitalizeWords(inputValue.trim()),
        ];

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
                <span className="font-bold text-gray-800">Ingredients</span>
                <br />
                <div className="flex items-center">
                    <input
                        type="text"
                        name="ingredients"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        className="text-gray-600 bg-white border-2 border-gray-600 active:border-gray-800 rounded-lg px-1 w-full max-w-2xl py-0.5"
                    />
                    <button
                        type="button"
                        onClick={handleAddIngredient}
                        className="bg-emerald-600 px-4 py-1 rounded-md font-bold ml-2 hover:bg-emerald-400 cursor-pointer"
                    >
                        Add
                    </button>
                </div>
            </label>

            <div className="mt-4 not-empty:border-t-2 not-empty:border-gray-600">
                {ingredientsList.map((ingredient) => (
                    <label
                        key={ingredient}
                        className="text-gray-600 flex gap-x-2 py-2 border-b-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={true}
                            onChange={() => handleRemoveIngredient(ingredient)}
                        />
                        {ingredient}
                    </label>
                ))}
            </div>
            <br />
        </>
    );
}

export default FoodInputIngredients;
