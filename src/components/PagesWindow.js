

export default function PagesWindow({ pages, currentPage, setCurrentPage, onAddPage }) {


    return (
        <div className="w-72 bg-white border-l flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
                <span className="font-medium">Pages</span>
                <button
                    onClick={onAddPage}
                    className="text-blue-500 hover:text-blue-600"
                >
                    + New page
                </button>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                    {pages.map((page) => (
                        <div
                            key={page.id}
                            className={`cursor-pointer transition-all ${currentPage === page.id ? 'ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-gray-300'
                                }`}
                            onClick={() => setCurrentPage(page.id)}
                        >
                            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                                <div className="aspect-[1/1.4] p-4 transform scale-90 origin-top">
                                    <div
                                        className="w-full h-full text-[8px] overflow-hidden bg-white"
                                        dangerouslySetInnerHTML={{ __html: page.content }}
                                    />
                                </div>
                            </div>
                            <div className="mt-1 text-center text-sm text-gray-600">
                                Page {page.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

