import React, {useEffect, useState} from 'react';

const App = () => {

  const [backendData, setBackendData] = useState([])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
    .catch(error => {
      console.error("Error fetching data from API:", error);
    });
  }, [])

  return (
    <div>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
};

export default App