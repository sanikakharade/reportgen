import { useState } from 'react';

export default function Sidebar() {
    // State to manage expanded sections
    const [expandedSections, setExpandedSections] = useState({
        companyOverview: false,
        financialOverview: false,
    });

    // Toggle section visibility
    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="w-64 bg-[#1E2937] text-white overflow-y-auto">
            <div className="p-4">
                {/* Table of Contents Header */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
                        Add Section
                    </button>
                </div>

                {/* Introduction Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold cursor-pointer">Introduction</h3>
                    <div className="pl-4 mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Letter of Engagement</span>
                            <button className="text-red-500 text-xs hover:underline">Delete</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Valuation Summary</span>
                            <button className="text-red-500 text-xs hover:underline">Delete</button>
                        </div>
                        <button className="text-blue-500 text-xs hover:underline">+ Add Item</button>
                    </div>
                </div>

                {/* Company Overview Section */}
                <div className="mb-8">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('companyOverview')}
                    >
                        <h3 className="text-lg font-semibold">Company Overview</h3>
                        <span>
                            {expandedSections.companyOverview ? (
                                <span>&uarr;</span>
                            ) : (
                                <span>&darr;</span>
                            )}
                        </span>
                    </div>
                    {expandedSections.companyOverview && (
                        <div className="pl-4 mt-2 space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Overview Content</span>
                                <button className="text-red-500 text-xs hover:underline">Delete</button>
                            </div>
                            <button className="text-blue-500 text-xs hover:underline">+ Add Item</button>
                        </div>
                    )}
                </div>

                {/* Financial Overview Section */}
                <div className="mb-8">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('financialOverview')}
                    >
                        <h3 className="text-lg font-semibold">Financial Overview</h3>
                        <span>
                            {expandedSections.financialOverview ? (
                                <span>&uarr;</span>
                            ) : (
                                <span>&darr;</span>
                            )}
                        </span>
                    </div>
                    {expandedSections.financialOverview && (
                        <div className="pl-4 mt-2 space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Financial Summary</span>
                                <button className="text-red-500 text-xs hover:underline">Delete</button>
                            </div>
                            <button className="text-blue-500 text-xs hover:underline">+ Add Item</button>
                        </div>
                    )}
                </div>

                {/* Variable Management and Section Mapping */}
                <div className="space-y-4">
                    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500">
                        Variable Management
                    </button>
                    <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500">
                        Section Mapping
                    </button>
                </div>
            </div>
        </div>
    );
}
