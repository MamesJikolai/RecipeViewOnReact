import { useState } from "react";

interface FoodData {
    name: string;
    type: string;
    tags: string[];
    image: string;
    ingredients: string[];
}

function FoodItem({ data }: { data: FoodData }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const buttonText = isExpanded ? "Show Less" : "Show More...";

    return (
        <article className="h-fit flex flex-row justify-start w-100 max-w-lg p-4 rounded-3xl bg-white shadow-lg overflow-hidden relative">
            <div className="w-40 h-52 shrink-0 rounded-2xl mr-4 overflow-hidden bg-gray-200">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover object-top"
                />
            </div>

            <div
                className={`flex flex-col grow relative transition-all duration-300 ${isExpanded ? "max-h-125" : "max-h-52"}`}
            >
                <div className="shrink-0">
                    <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">
                        {data.type}
                        <br />
                        <span className="text-[0.5rem] tracking-normal leading-none">
                            {data.tags.join(", ")}
                        </span>
                    </p>
                    <h2 className="text-[1.25rem] font-bold my-2 text-gray-800 leading-tight">
                        {data.name}
                    </h2>
                </div>

                <div className="flex-1 min-h-0 relative overflow-hidden">
                    <ul>
                        {data.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-sm text-gray-600">
                                {ingredient}
                            </li>
                        ))}
                    </ul>

                    <div
                        className={`pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-white to-transparent transition-opacity duration-300 ${
                            isExpanded ? "opacity-0" : "opacity-100"
                        }`}
                    />
                </div>

                <div className="mt-auto pt-2 shrink-0 flex items-end w-full">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-emerald-700 text-sm font-bold hover:text-emerald-900 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default FoodItem;
