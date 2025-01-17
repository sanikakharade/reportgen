import * as XLSX from 'xlsx';

export const readExcelFile = async (file) => {
    try {
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        return jsonData;
    } catch (error) {
        console.error('Error reading Excel file:', error);
        return null;
    }
};

