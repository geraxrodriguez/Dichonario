const express = require('express');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const passport = require('passport');
const connectDB = require('./config/database');
const cors = require('cors');

// Define express app variable
const app = express();

// Enable environment variables
require('dotenv').config({ path: './config/.env' });

// Passport configuration
require('./config/passport');

// Import routes
const mainRoutes = require('./routes/mainRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());

// Parse POST / PUT requests. Needs to be placed before routes.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Define public folder
app.use(express.static('public'));

// Configure session 
app.use(
    session({
        secret: 'secret key',
        resave: false,                 
        saveUninitialized: false,      
        store: new MemoryStore({
            checkPeriod: 86400000      
        }),
        cookie: {
            maxAge: 86400000,
        },
    })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to DB before listening
connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    });