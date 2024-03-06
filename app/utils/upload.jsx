import * as XLSX from 'xlsx';
import { useState } from 'react';

export default function Upload() {
  const [data, setData] = useState([]);
  console.log(data);

  const handleFileUpload = (e) => {
    // Creating a new instance of the file
    const reader = new FileReader();
    // Read the content of the uploaded file
    reader.readAsBinaryString(e.target.files[0]);
    // When file is uploaded, parse the data to JSON
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };

  return (
    <div>
      <input
        type='file'
        accept='.xlsx, xls'
        onChange={handleFileUpload}
        className='hover:scale-110'
      />
    </div>
  );
}
