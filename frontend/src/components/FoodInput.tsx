import { useState } from "react";
import type { ChangeEvent } from "react";
import FoodInputIngredients from "./FoodInputIngredients";

function FoodInput() {
    const [foodInfo, setFoodInfo] = useState({
        foodName: "",
        foodType: "",
        recipeTags: [] as string[],
        imageLink: "",
        ingredients: [] as string[],
    });

    const foodTypes = ["Pork", "Beef", "Chicken", "Vegetables", "Seafood"];
    const recipeTags = [
        {
            category: "Flavors",
            options: [
                "Spicy",
                "Sweet",
                "Sour / Tangy",
                "Salty / Savory",
                "Rich / Umami",
            ],
        },
        {
            category: "Components",
            options: [
                "Contains Vegetables",
                "Dairy / Cheesy",
                "Nutty",
                "Fruity",
            ],
        },
        {
            category: "Style",
            options: ["Broth / Soup", "Crispy / Fried", "Creamy", "Saucy"],
        },
        {
            category: "Prep",
            options: [
                "Quick & Easy",
                "One-Pan / One-Pot",
                "Meal-Prep Friendly",
            ],
        },
    ];

    const handleFoodInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            setFoodInfo((prevInfo) => {
                const currentTags = prevInfo.recipeTags as string[];

                const updatedTags = checked
                    ? [...currentTags, value]
                    : currentTags.filter((item) => item !== value);

                return {
                    ...prevInfo,
                    [name]: updatedTags,
                };
            });
        } else {
            setFoodInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value,
            }));
        }
    };

    function updateIngredientsList(newIngredientsArray: string[]) {
        setFoodInfo((prevInfo) => ({
            ...prevInfo,
            ingredients: newIngredientsArray,
        }));
    }

    function handleSubmit() {
        console.log(foodInfo);
        setFoodInfo({
            foodName: "",
            foodType: "",
            recipeTags: [] as string[],
            imageLink: "",
            ingredients: [] as string[],
        });
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl border-slate-100">
            <div className="mb-6">
                <label>
                    <span className="font-bold text-gray-800">Food Name</span>
                    <br />
                    <input
                        type="text"
                        name="foodName"
                        value={foodInfo.foodName}
                        onChange={handleFoodInfoChange}
                        className="text-gray-600 bg-white border-2 border-gray-600 active:border-gray-800 rounded-lg px-1 w-full max-w-2xl py-0.5"
                    />
                </label>
            </div>

            <fieldset>
                <legend className="font-bold text-gray-800">Food Type</legend>
                <div className="flex flex-row flex-wrap gap-x-4 mb-6">
                    {foodTypes.map((type) => (
                        <label
                            key={type}
                            className="text-gray-600 flex gap-x-1 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="foodType"
                                value={type}
                                checked={foodInfo.foodType === type}
                                onChange={handleFoodInfoChange}
                            />
                            {type}
                        </label>
                    ))}
                </div>
            </fieldset>

            <fieldset>
                <legend className="font-bold text-gray-800">Recipe Tags</legend>
                {recipeTags.map(({ category, options }) => (
                    <div key={category}>
                        <p className="font-medium text-gray-800">{category}</p>
                        <div className="flex flex-row flex-wrap gap-x-4 mb-2">
                            {options.map((options) => (
                                <label
                                    key={options}
                                    className="flex gap-x-2 cursor-pointer text-gray-600"
                                >
                                    <input
                                        type="checkbox"
                                        name="recipeTags"
                                        checked={foodInfo.recipeTags.includes(
                                            options,
                                        )}
                                        value={options}
                                        onChange={handleFoodInfoChange}
                                    />
                                    {options}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </fieldset>

            <div className="mb-6 mt-4">
                <label>
                    <span className="font-bold text-gray-800">Image Link</span>
                    <br />
                    <input
                        type="text"
                        name="imageLink"
                        value={foodInfo.imageLink}
                        onChange={handleFoodInfoChange}
                        className="text-gray-600 bg-white border-2 border-gray-600 active:border-gray-800 rounded-lg px-1 w-full max-w-2xl py-0.5"
                    />
                </label>
            </div>

            <FoodInputIngredients
                ingredientsList={foodInfo.ingredients}
                onIngredientsChange={updateIngredientsList}
            />

            <div className="text-center">
                <button
                    type="submit"
                    className="bg-emerald-600 px-4 py-2 rounded-md font-bold hover:bg-emerald-400 cursor-pointer"
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default FoodInput;
