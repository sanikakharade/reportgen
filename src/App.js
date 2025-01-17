import { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import { getTemplates } from './api/request';

export default function App() {
  const [pages, setPages] = useState([
    { id: 1, content: '<p>Start typing your report here...</p>' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageContent = (content, id) => {
    setPages(pages.map(page => (page.id === id ? { ...page, content } : page)));
  };

  const addNewPage = () => {
    const newPage = {
      id: pages.length + 1,
      content: '<p>Continue your report here...</p>'
    };
    setPages([...pages, newPage]);
  };

  useEffect(() => {
    const fetchDetails = async() => {
      const res = await getTemplates();
      console.log(res.data)
    } 
    fetchDetails();
  }, [])

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-80">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-[2] overflow-y-auto bg-gray-50">
            <div className="min-h-full flex flex-col items-center py-8 space-y-8">
              {pages.map(page => (
                <div
                  key={page.id}
                  className="bg-white shadow-lg rounded-lg w-[716px] min-h-[956px] p-12 relative"
                >
                  <textarea
                    className="w-full h-full border-none outline-none resize-none"
                    value={page.content.replace(/<[^>]*>/g, '')}
                    onChange={e => handlePageContent(e.target.value, page.id)}
                  />
                  <div className="absolute bottom-2 right-2 text-gray-400 text-sm">
                    Page {page.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PagesWindow pages={pages} setCurrentPage={setCurrentPage} onAddPage={addNewPage} />
        </div>
      </div>
    </div>
  );
}

function PagesWindow({ pages, setCurrentPage, onAddPage }) {
  return (
    <div className="w-60 bg-white border-l flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-medium">Pages</span>
        <button
          onClick={onAddPage}
          className="text-blue-500 hover:text-blue-600"
        >
          + Add Page
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {pages.map(page => (
          <div
            key={page.id}
            className="p-2 border rounded-lg shadow-sm hover:ring-2 ring-blue-500 transition-all"
            onClick={() => setCurrentPage(page.id)}
          >
            <div
              className="aspect-[1/1.4] transform scale-75 origin-top bg-gray-50 p-1 overflow-hidden"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
            <div className="text-center text-xs text-gray-500">Page {page.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
