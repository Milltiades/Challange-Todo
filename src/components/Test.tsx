import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event:any) => {
      localStorage.setItem('myPhoto', event.target.result);
      setSelectedFile(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {selectedFile && <img src={selectedFile} alt="uploaded" />}
    </div>
  );
}

export default App;
