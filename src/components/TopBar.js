export default function TopBar() {
    return (
        <div className="h-16 bg-white border-b flex items-center px-4 justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold">New Report</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center">
                    Save Changes
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center">
                    Generate Report
                </button>
            </div>
        </div>
    );
}

