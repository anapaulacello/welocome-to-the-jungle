const mongoose = require('mongoose');
const Animals =require('../app/api/models/animal.model')

const animals=[
    {
        id:1,
        name:"perro",
        isCarnivore:true,
        family:"61a154909796894fed20d9f9"
    },
    {
        id:2,
        name:"lobo",
        isCarnivore:true,
        family:"61a154909796894fed20d9f9"
    },
    {
        id:3,
        name:"ballena",
        isCarnivore:false,
        family:"61a1647e4bda00fa3c9eb097"
    },
    {
        id:4,
        name:"tocororo",
        isCarnivore:false,
        family:"61a164c333e9a07b9af06fdb"
    },
    {
        id:5,
        name:"mariposa",
        isCarnivore:false,
        family:"61a15a49970d297df437dd26"
    }
]

const animalDocuments = animals.map (animals => new Animals(animals));
mongoose
.connect('mongodb+srv://anapaula:cellosol1@cluster0.dp8ro.mongodb.net/welcomw-to-the-jungle?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(async() =>
{const allAnimal = await Animals.find()
if (allAnimal.length) {
    await Animals.collection.drop();
}})
.catch((err) => console.log(`error deleting data: ${err}`))
.then(async() => {
    await Animals.insertMany(animalDocuments);
})
.catch((err) => console.log(`error deleting data: ${err}`))
.finally(() => mongoose.disconnect())