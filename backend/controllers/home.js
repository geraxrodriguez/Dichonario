const Sub = require('../models/Sub')
const Dicho = require('../models/Dicho')
const validator = require('validator');

module.exports = {
    cron: (req, res) => {
        res.send('ok')
    },
    getDichos: async (req, res) => {
        try {
            const dichos = await Dicho.find() // find method w/out args returns all documents in collection
            res.status(200).json({
                dichos,
            });
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },
    // GET SINGLE DICHO
    getDicho: async (req, res) => {
        try {
            const dicho = await Dicho.findById(req.params.id) // find method w/out args returns all documents in collection
            return res.status(200).json(dicho);
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },
    surpriseMe: async (req, res) => {
        try {
            // instead of accessing dicho using indexing, dicho[0]. We can destructure since theres only one dicho in returned array
            const [ dicho ] = await Dicho.aggregate([{ $sample: { size: 1 } }]);
            const id = dicho._id;
            res.status(200).send(id);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    },
    // SUBMIT DICHO FORM
    submitDicho: async (req, res) => {
        try {
            // console.log('We reached the createSub method')
            console.log(req.body)
            const { dicho, literalMeaning, actualMeaning, examples, related, comments, history } = req.body
            const sub = await Sub.create({
                dicho,
                literalMeaning,
                actualMeaning,
                examples,
                related,
                comments,
                history,
            })
            return res.status(201).send(sub);
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message });
        }
    },

    postSuggestions: async (req, res) => {
        try {
            await Dicho.updateOne(
                { _id: req.params.id },
                { $push: { suggestions: req.body.suggestions } }
            );
            res.status(201).send('suggestion received')
        } catch (err) {
            console.error(err);
        };
    },
}