
class Tarefas{
    constructor(name, data, descricao ){

        this._name = name;
        this._date = data;
        this._descrition = descricao;
        this._id;
       
    }
    

    get name(){
        return this._name;
    }
    set name (n){
        this._name = n;
    }
    get date(){
        return this._date;
    }
    set date (d){
        this._date = d;
    }
    get descrition(){
        return this._descrition;
    }
    set descrition (des){
        this._descrition = des;
    }
    get id(){
        return this._id;
    }

    isItemtoStorage(){

        let itens = [];
            if(localStorage.getItem('intens')){
             itens = JSON.parse(localStorage.getItem('intens'));  
            }

            return itens;
    }

    addId(json){

        let itens = this.isItemtoStorage();
        json._id = itens.length + 1;
    }
    
    bd (){
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
        mongoose.Model('listaT', listaT);

        const lista = mongoose.model('listaT')

        return lista;
    }
    saveStorage(json){
        const lista =this.bd();
        
        let itens = this.isItemtoStorage();
        this.addId(json)
        itens.push(json);
        itens = JSON.stringify(itens);
        console.log('çççç: ',itens)
        new lista({
            
        })
       // localStorage.setItem('intens', );

    }
    
}