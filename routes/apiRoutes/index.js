const router = require("express").Router();
const { verifyNotes, createNotes } = require('../../lib/routeFunctions');
const { notes } = require('../../data/db.json');

    // return current notes obj
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('./notes', (req, res) => {

    req.body.id = notes.length.toString();

    if(!verifyNotes(req.body)) {
        res.status(400).send('Please format your note correctly :)');
    } else {
        const note = createNotes(req.body, notes);
        res.json(note);
    }
})

module.exports = router;