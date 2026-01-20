// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const planRoutes = require('./src/routes/planRoutes');
const memberRoutes = require('./src/routes/memberRoutes');
const classRoutes = require('./src/routes/classRoutes');
const app = express();

// Middleware
app.use(express.json()); // Allows us to parse JSON bodies
app.use(cors()); // Allows frontend to talk to backend

connectDB();

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/members', memberRoutes); 
app.use('/api/classes', classRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});