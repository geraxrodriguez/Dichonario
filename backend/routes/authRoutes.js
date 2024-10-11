const express = require('express')
const passport = require('passport');
const User = require('../models/User');
const router = express.Router()


router.post('/sign-up', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingEmail = await User.findOne({ email })
        const existingUsername = await User.findOne({ username })
        
        // check if user exists with this username
        if (existingEmail) { return res.status(400).send('Email already registered.')}
        // check if user exists with this email
        if (existingUsername) { return res.status(400).send('Username already taken.')}
        
        const newUser = new User({ username, email, password });
        await newUser.save();
        console.log('woo hoo!')
        res.status(201).send('User registered!');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});


// router.post('/login', 
//     passport.authenticate('local', { 
//         failureRedirect: 'http://localhost:5173/login' }),
//         (req, res) => {
//             console.log(`reached router.post /login. req: ${req.body}`);
//             return res.status(200).send('ok');
//         },
// );

router.post('/login', (req, res, next) => {
    const authMiddleware = passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        
        if (!user) { return res.status(401).json({ message: info.message }); }
        
        req.logIn(user, err => {
            if (err) { return next(err); }
            return res.status(200).json({ message: 'Authentication successful', user})
        });
    })
    
    // Executre authenticatioin middleware
    authMiddleware(req, res, next);
});

module.exports = router