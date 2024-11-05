// app.js
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes.js'); // Corrected path

// Middleware to parse JSON data
app.use(express.json());

// Blog routes
app.use('/api/blog', blogRoutes);

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
