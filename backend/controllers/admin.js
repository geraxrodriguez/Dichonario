const Sub = require('../models/Sub')
const Dicho = require('../models/Dicho')

module.exports = {
  //GET ALL SUBMISSIONS
  getSubs: async (req, res) => {
      try {
        const subs = await Sub.find().lean();
        res.render('admin/subs.ejs', { subs: subs });
      } catch (err) {
        console.log(err);
      }
  },

  //GET AND EDIT SUBMISSION
  editSub: async (req, res) => {
      try {
        const id = req.params.id
        const sub = await Sub.findById(id);
        res.render("admin/sub.ejs", { sub: sub, id: id });
      } catch (err) {
        console.log(err);
      }
  },

  // ACCEPT A DICHO SUBMISSION
  acceptSub: async (req, res) => {
    try {
        const id = req.params.id
        const { dicho, meaning, example, variations, comments } = req.body

        // if we don't provide a dicho, meaning, or example, then we want to show an error message
        if (!dicho || !meaning || !example) {
          req.flash('message', 'Oops! Something is missing :( Please make sure you have filled out all fields')
          res.redirect(`/admin/subs/${id}`)
        }

        // else if user provides dicho, meaning, and example, then we want to create a Dicho, delete that Sub, and show a success message
        else {
            await Dicho.create({ 
                dicho: dicho, 
                meaning: meaning, 
                example: example,
                variations: variations,
                comments: comments,
            });
            await Sub.deleteOne({ _id: id });
          req.flash('message', 'Submission accepted');
          res.redirect('/admin/subs');
        }
    } catch (err) {
        console.error(err)
    }
  },

  // GET ALL DICHOS
  getDichos: async (req, res) => {
    try {
        const dichos = await Dicho.find() // find method w/out args returns all documents in collection
        res.render('admin/dichos.ejs', {dichos: dichos})
    } catch (err) {
        console.error('Error fetching dichos:', err);
        res.status(500).send('Internal Server Error');
    }
  },

  // GET SINGLE DICHO
  getOneDicho: async (req, res) => {
    try {
        const dicho = await Dicho.findById(req.params.id) // find method w/out args returns all documents in collection
        res.render('admin/dicho.ejs', { dicho, })
    } catch (err) {
        console.error('Error fetching dichos:', err);
        res.status(500).send('Internal Server Error');
    }
  },

  // GET EDIT-DICHO PAGE
  getEditDichoPage: async (req, res) => {
    try {
      const id = req.params.id
      const dicho = await Dicho.findById(id);
      res.render("admin/edit-dicho.ejs", { 
        dicho,
        id,
      });
    } catch (err) {
      console.log(err);
    }
  },
  
  // POST METHOD FOR EDITING DICHO
  editDicho: async (req, res) => {    
    try {
      const id = req.params.id
      const { dicho, meaning, example, variations, comments } = req.body
      if (!dicho || !meaning || !example) {
        req.flash('message', 'Oops! Something is missing :( Please make sure you have filled out all fields')
        res.redirect(`/admin/edit-dicho/${id}`)
      } else {
        await Dicho.findByIdAndUpdate(id, {
          dicho,
          meaning,
          example,
          variations,
          comments,
        });
        req.flash('message', 'Edit Accepted'); // route back to same dicho and show a success message
        res.redirect(`/admin/dichos/${id}`);
      };
      // end try block
    } catch (err) {
      console.error('Error fetching dichos:', err);
      res.status(500).send('Internal Server Error');
    }; // end catch block
  },

  // CREATE DICHO
  createDicho: async (req, res) => {
    try {
      // gets pieces of Dicho from req
      const { 
        dicho,
        literalMeaning,
        actualMeaning, 
        examples,
        related,
        comments,
        history,
      } = req.body;

      if (!history.length) {
        history = 'No history yet for this dicho';
      }

      // creates Dicho in database
      await Dicho.create({
        dicho,
        literalMeaning,
        actualMeaning, 
        examples,
        related,
        comments,
        history,
      });
      res.status(201).send('Dicho created')
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error')
    }
  },
};
