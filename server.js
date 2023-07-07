const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Set the Access-Control-Allow-Origin header
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Your code to handle the request and send the response
  // ...
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
