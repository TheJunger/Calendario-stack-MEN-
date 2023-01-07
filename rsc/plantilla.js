import mongoose from 'mongoose';
const { Schema } = mongoose;

const mesesSchema = new Schema(
    {

        "dia": Number,
        "tipo": String,
        "tareas":[
            {   

                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'enero'})

const Mfebrero = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "tareaid": Number,
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'febrero'})     
    
const marzo = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "tareaid": Number,
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'marzo'})

const abril = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'abril'})

const mayo = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'mayo'})

const junio = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'junio'})

const julio = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'julio'})

const agosto = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'agosto'})

const septiembre = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'septiembre'})

const octubre = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'octubre'})

const noviembre = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'noviembre'})

const diciembre = new Schema(
    {
        "dia": Number,
        "tipo": String,
        "tareas":[
            {
                "titulo":String,
                "descripcion":String
            }
        ]
    }, {collection:'diciembre'})

const crearDia = mongoose.model('enero', mesesSchema)
const connectFebrero = mongoose.model('febrero', Mfebrero)
const connectMarzo = mongoose.model('marzo', marzo)
const connectAbril = mongoose.model('abril', abril)
const connectMayo = mongoose.model('mayo', mayo)
const connectJunio = mongoose.model('junio', junio)
const connectJulio = mongoose.model('julio', julio)
const connectAgosto = mongoose.model('agosto', agosto)
const connectSeptiembre = mongoose.model('septiembre', septiembre)
const connectOctubre = mongoose.model('octubre', octubre)
const connectNoviembre = mongoose.model('noviembre', noviembre)
const connectDicembre = mongoose.model('diciembre', diciembre)

export {crearDia, connectFebrero, connectMarzo, connectAbril, connectMayo, connectJunio, connectJulio, connectAgosto, connectSeptiembre, connectOctubre, connectNoviembre, connectDicembre}