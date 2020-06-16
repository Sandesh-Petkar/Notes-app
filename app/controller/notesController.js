const Note=require('../models/note')

module.exports.list=(req,res)=>{
    Note.find()
    .then((notes)=>{
        res.json(notes)
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports.create=(req,res)=>{
    const body=req.body
    const newNote=new Note(body)
    newNote.save()
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.show=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Note.findByIdAndUpdate(id,body)
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.del=(req,res)=>{
    const id=req.params.id
    Note.findByIdAndDelete(id)
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        console.log(err)
    })
}