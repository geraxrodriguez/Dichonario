const express = require('express')
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const passport = require('passport');
const connectDB = require('./config/database')
const cors = require('cors')
// const cookieParser = require('cookie-parser');
// const MongoStore = require ('connect-mongo');

// Define express app variable
const app = express()

// Enable environment variables
require('dotenv').config({ path: './config/.env' })

// Passport configuration
require('./config/passport');

// Import routes
const mainRoutes = require('./routes/mainRoutes')
const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes');

app.use(cors())

// Routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Define public folder
app.use(express.static('public'))

// Parse POST / PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session 
app.use(
    session({
        secret: 'secret key',
        resave: false,                 // don't save session if unmodified
        saveUninitialized: false,      // don't create session until something stored
        store: new MemoryStore({
            checkPeriod: 86400000      // prune expired entries every 24h
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
            console.log(`Server running on port ${process.env.PORT}`)
        })
    })