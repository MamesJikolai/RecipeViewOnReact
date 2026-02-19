function FoodInput() {
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

    return (
        <div className="w-full max-w-125 mx-auto">
            <div className="mb-2">
                <label>
                    <span className="font-bold">Food Name</span>
                    <br />
                    <input
                        type="text"
                        name="food-name"
                        className="bg-white px-1 w-full max-w-125 py-0.5"
                    />
                </label>
            </div>

            <fieldset>
                <legend className="font-bold">Food Type</legend>
                <div className="flex flex-row flex-wrap gap-x-4 mb-2">
                    {foodTypes.map((type) => (
                        <label
                            key={type}
                            className="flex gap-x-1 cursor-pointer"
                        >
                            <input type="radio" name="food-type" value={type} />
                            {type}
                        </label>
                    ))}
                </div>
            </fieldset>

            <fieldset>
                <legend className="font-bold">Recipe Tags</legend>
                {recipeTags.map(({ category, options }) => (
                    <div key={category}>
                        <p className="font-medium">{category}</p>
                        <div className="flex flex-row flex-wrap gap-x-4 mb-2">
                            {options.map((options) => (
                                <label
                                    key={options}
                                    className="flex gap-x-1 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        name="recipe-tags"
                                        value={options}
                                    />
                                    {options}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </fieldset>

            <div className="mb-2">
                <label>
                    <span className="font-bold">Image Link</span>
                    <br />
                    <input
                        type="text"
                        name="image-link"
                        className="bg-white px-1 w-full max-w-125 py-0.5"
                    />
                </label>
            </div>
        </div>
    );
}

export default FoodInput;
