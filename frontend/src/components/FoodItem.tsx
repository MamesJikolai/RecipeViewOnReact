import { useState } from "react";

interface FoodData {
    name: string;
    type: string[];
    ingredients: string[];
    image: string;
}

function FoodItem({ data }: { data: FoodData }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const buttonText = isExpanded ? "Show Less" : "Show More...";

    return (
        <article className="h-fit flex flex-row justify-start w-100 max-w-lg p-4 rounded-3xl bg-amber-50 shadow-sm border border-amber-100 overflow-hidden relative">
            <div className="w-40 h-52 shrink-0 rounded-2xl mr-4 overflow-hidden bg-gray-200">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover object-top"
                />
            </div>

            <div className="flex flex-col grow relative">
                <div>
                    <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">
                        {data.type.join(" | ")}
                    </p>
                    <h2 className="font-bold mb-2 text-gray-800 leading-tight">
                        {data.name}
                    </h2>

                    <div className="relative">
                        <ul
                            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                                isExpanded ? "max-h-125" : "max-h-30"
                            }`}
                        >
                            {data.ingredients.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-gray-600"
                                >
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                        <div
                            className={`pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-amber-50 to-transparent transition-opacity duration-500 ${
                                isExpanded ? "opacity-0" : "opacity-100"
                            }`}
                        />
                    </div>
                </div>

                <div className="mt-auto pt-2 flex items-end w-full">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-amber-700 text-sm font-bold hover:text-amber-900 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default FoodItem;
