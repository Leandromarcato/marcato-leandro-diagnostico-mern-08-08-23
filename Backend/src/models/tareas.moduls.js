const {Schema,model} = require('mongoose')

 const tareasSchema = new Schema({
    Tarea:String,
    descripcion:{
        type : String,
       
    },
    autor: String,
    date: {
        type: Date,
        default: new Date()
    },

   Estado:{
    type: String,
   
   }
})

module.exports= model('tareas', tareasSchema)