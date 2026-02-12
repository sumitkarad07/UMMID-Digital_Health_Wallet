const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('Backend API is running 🚀');
});

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
