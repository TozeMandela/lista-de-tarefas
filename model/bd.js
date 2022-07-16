const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/listaTarefas').then(()=>{
    console.log('full connection');
}).catch((e)=>{
    console.log('erro ao se conectar...',e);
});

const listaT = mongoose.Schema({
    nome : {
        type: String,
        require: true
    },
    data : {
        type: Date,
        require: true
    },
    descrixao: {
        type: String,
        require: true
    },
    id: {
        type: Number,
        require: true
    }
});
mongoose.model('listaT', listaT);

const lista = mongoose.model('listaT');

module.exports = {
    mongoose: mongoose, lista: lista
} 