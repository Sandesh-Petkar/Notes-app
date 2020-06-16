const Category=require('../models/category')

module.exports.list=(req,res)=>{
    Category.find()
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const newCat=new Category(body)
    newCat.save()
    .then((cat)=>{
        res.json(cat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Category.findById(id)
    .then((cate)=>{
        if(cate){
            res.json(cate)
        }else{
            res.json({})
        }
    })
}

module.exports.add=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Category.findByIdAndUpdate(id,body)
    .then((cat)=>{
        res.json(cat)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.del=(req,res)=>{
    const id=req.params.id
    
    Category.findByIdAndDelete(id)
    .then((cat)=>{
        res.json(cat)
    })
    .catch((err)=>{
        console.log(err)
    })
}