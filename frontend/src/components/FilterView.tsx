import { useState } from "react";
import FoodInput from "./FoodInput.tsx";

interface FilterViewProps {
    onFilterChange: (filterCriteria: any) => void;
}

function FilterView({ onFilterChange }: FilterViewProps) {
    const [showFilter, setShowFilter] = useState(false);

    const handleApplyAndClose = (filterData: any) => {
        onFilterChange(filterData);
        setShowFilter(false);
    };

    return (
        <div className="flex flex-col items-center my-8">
            <button
                className="bg-emerald-600 text-white px-6 py-2 rounded-md font-bold hover:bg-emerald-700 shadow-sm transition-colors"
                onClick={() => setShowFilter(true)}
            >
                Open Filters
            </button>

            {showFilter && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
                        <button
                            onClick={() => setShowFilter(false)}
                            className="absolute top-1 right-4 text-gray-400 hover:text-red-600 text-3xl font-bold z-10 transition-colors"
                            aria-label="Close filters"
                        >
                            &times;
                        </button>

                        <FoodInput
                            isFilter={true}
                            onApplyFilter={handleApplyAndClose}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterView;
