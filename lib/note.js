const notes = require('../db/db.json')
const fs = require('fs')
const path = require('path')
const { redirect } = require('express/lib/response')

const createNewNote = (body, notes) => {
    const note = body
    notes.push(note)

    // writing to JSON file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    return note
}

const assignUniqueId = (req, notes) => {
    //adding id to note
    req.body.id = (notes.length + 1).toString()

    // checking id does not already exist 
    let idExists = notes.findIndex((note) => {
        return note.id == req.body.id
    })

    if (idExists === -1) {
        return req.body
    } else {
        // using while loop to check whether id exists
        do {
            req.body.id ++ 
            idExists = notes.findIndex((note) => {
                return note.id == req.body.id
            })
        }
        while (idExists !== -1)
        // changing id back to string
        req.body.id = req.body.id.toString()

        return req.body
    }
}

module.exports = { createNewNote, assignUniqueId }