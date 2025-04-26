const Sub = require('../models/Sub')
const Dicho = require('../models/Dicho')


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
            const dicho = await Dicho.findById(req.params.id)
            return res.status(200).json(dicho);
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },
    surpriseMe: async (req, res) => {
        try {
            const [ dicho ] = await Dicho.aggregate([{ $sample: { size: 1 } }]); // $sample randomly selects the specificed number of documents
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
            const { dicho, literalMeaning, actualMeaning, examples, related, comments, history } = req.body
            await Sub.create({
                dicho,
                literalMeaning,
                actualMeaning,
                examples,
                related,
                comments,
                history,
            });
            return res.status(201).send('Submission has been received :)');
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: 'oops! There was an error' });
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
};