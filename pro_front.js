// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    const res = await axios.post('http://localhost:5000/upload', formData);
    alert(Matches found: ${JSON.stringify(res.data)});
  };

  return (
    <div className="App">
      <h1>👑 Jewellery Visual Search 👑</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;