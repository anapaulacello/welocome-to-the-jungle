const mongoose = require('mongoose');
const Families =require('../app/api/models/family.model')

const families=[
    {
        id:1,
        name:"mamiferos",
        livingInGroup:false,
        habitat:"Tierra"
    },
    {
        id:2,
        name:"artropodos",
        livingInGroup:false,
        habitat:"Mar"
    },
    {
        id:3,
        name:"aves",
        livingInGroup:false,
        habitat:"Tierra"
    },
    {
        id:4,
        name:"reptiles",
        livingInGroup:false,
        habitat:"Tierra"
    },
    {
        id:5,
        name:"anfibios",
        livingInGroup:false,
        habitat:"Aire"
    }
]

const familiesDocuments = families.map (families => new Families(families));
mongoose
.connect('mongodb+srv://anapaula:cellosol1@cluster0.dp8ro.mongodb.net/welcomw-to-the-jungle?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(async() =>
{const allFamilies = await Families.find()
if (allFamilies.length) {
    await Families.collection.drop();
}})
.catch((err) => console.log(`error deleting data: ${err}`))
.then(async() => {
    await Families.insertMany(familiesDocuments);
})
.catch((err) => console.log(`error deleting data: ${err}`))
.finally(() => mongoose.disconnect())