const fs = require('fs');
const path = require('path');

const verifyNotes = () => {
    const title = note.title
    const text = note.text

    if(!title|| typeof title !== 'string') {
        return false
    }
    if(!text || typeof text !== 'string') {
        return false
    }
    return true
}

const createNotes = (body, noteArray) => {

}

module.exports = { verifyNotes, createNotes }
