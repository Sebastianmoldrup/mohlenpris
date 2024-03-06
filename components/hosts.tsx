import hosts from '../app/data/testhosts.json';
import { useState } from 'react';

const FileInput = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e: EventTarget) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const jsonData = await hosts(file.path); // Update with correct property for the file path
      onFileUpload(jsonData);
    }
  };

  return (
    <div>
      <input type='file' accept='.xlsx' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Convert</button>
    </div>
  );
};

export default FileInput;
