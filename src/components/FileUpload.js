import { useEffect } from "react";
import { getTemplates } from "../api/request";
import { readExcelFile } from '../utils/excelHandler';

export default function FileUpload({ setExcelData }) {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const data = await readExcelFile(file);
            setExcelData(data);
        }
    };
    useEffect(() => {
        const fetchDetails = async () => {
            const response = await getTemplates()
            console.log(response)
        }
        fetchDetails();
    }, [])
    return (
        <div className="flex items-center gap-2">
            <label className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                Upload Excel
                <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileUpload}
                    className="hidden"
                />
            </label>
        </div>
    );
}

