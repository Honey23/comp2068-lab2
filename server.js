const express = require('express'); // Require in express
const app = express(); // Init express
const PORT = 3000; // Port our application will run on
const math = require('./calc'); // Import math

// At the index of our application - use the handle http calculation function
// from our calc.js file - to handle the request
app.get('/', math);

app.listen(PORT);
console.log(`Your application is running at http://localhost:${PORT}`);