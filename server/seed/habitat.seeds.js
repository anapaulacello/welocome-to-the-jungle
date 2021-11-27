const mongoose = require('mongoose');
const Habitats =require('../app/api/models/habitat.model')

const habitats=[
    {
        id:1,
        name:"amazonas",
        location:"8 00 N, 66 00 W",
        mode:"Tierra"
    },
    {
        id:2,
        name:"caribe",
        location:"8 00 N, 66 00 W",
        mode:"Mar"
    },
    {
        id:3,
        name:"atacama",
        location:"24°30′S 69°15′O",
        mode:"Tierra"
    },
    {
        id:4,
        name:"sahara",
        location:"23°04′47″N 12°36′44″E",
        mode:"Tierra"
    },
    {
        id:5,
        name:"templo de los monjes del aire",
        location:"14°4′9″ N, 100°38′51",
        mode:"Aire"
    }
]

const habitatsDocuments = habitats.map (habitats => new Habitats(habitats));
mongoose
.connect('mongodb+srv://anapaula:cellosol1@cluster0.dp8ro.mongodb.net/welcomw-to-the-jungle?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(async() =>
{const allHabitats = await Habitats.find()
if (allHabitats.length) {
    await Habitats.collection.drop();
}})
.catch((err) => console.log(`error deleting data: ${err}`))
.then(async() => {
    await Habitats.insertMany(habitatsDocuments);
})
.catch((err) => console.log(`error deleting data: ${err}`))
.finally(() => mongoose.disconnect())