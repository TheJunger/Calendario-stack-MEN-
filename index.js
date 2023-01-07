import mongoose from 'mongoose';
import express from 'express';
import ejs from 'ejs'
import path, { parse } from 'path';
import { fileURLToPath } from 'url';
import { crearDia, connectFebrero, connectMarzo, connectAbril, connectMayo, connectJunio, connectJulio, connectAgosto, connectSeptiembre, connectOctubre, connectNoviembre, connectDicembre } from './rsc/plantilla.js';
import * as fs from 'fs';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv'
dotenv.config()

import almacendedias from './rsc/almacen.json' assert {type: 'json'}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const user = process.env.USER
const pass = process.env.PASSWORD
const dbname = process.env.DBNAME
const port = process.env.PORT
const uri = `mongodb+srv://${user}:${pass}@cluster0.eqqa4nk.mongodb.net/${dbname}?retryWrites=true&w=majority`;


//-connect to mongodb
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('base de datos conectada')
})
.catch((e)=>{console.log(e)})

//-configs

const app = express()

app.set('case sensitive routing', true) 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('./rsc'))
app.use(express.static('./node_modules'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//-render ejs
app.get('/calendario', (req,res)=>{
    res.render('../rsc/index.ejs')
})

app.get('/putdias', async (req,res)=>{
    //let connectToFebrero = await connectFebrero.find()
    //await connectFebrero.updateMany(almacendedias)
    //await connectFebrero.insertMany()
    for (let i = 0; i < almacendedias.length; i++) {
        //await connectFebrero.find()
        //await connectAbril.insertMany(almacendedias[i])
        //await connectJunio.insertMany(almacendedias[i])
        //await connectSeptiembre.insertMany(almacendedias[i])
        //await connectNoviembre.insertMany(almacendedias[i]) //abril junio septiembre noviembre
        //console.log(almacendedias[i])
    }
    res.send('Archivos subidos')

})

app.post('/calendario', async(req,res)=>{
    let arrayDias = await crearDia.find()

    if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await crearDia.find()
    }
    if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectFebrero.find()
    }
    if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectMarzo.find()
    }
    if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectAbril.find()
    }
    if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectMayo.find()
    }
    if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectJunio.find()
    }
    if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectAgosto.find()
    }
    if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectSeptiembre.find()
    }
    if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectOctubre.find()
    }
    if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectNoviembre.find()
    }
    if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectJulio.find()
    }
    if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
        //console.log('mes '+req.body.Mes+' reconocido')
        arrayDias = await connectDicembre.find()
    }

    //-obtener dia desde el front

    res.send(arrayDias)
    //con esto setteo el dia en trabajo o descanso a mongodb
    if(req.body.Tipo == 'Trabajo'){

        //console.log('Dia : '+ req.body.Dia + ' Asignado como Trabajo')

        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Trabajo"}})
        }

    }

    if(req.body.Tipo == 'Descanso'){

        //console.log('Dia : '+ req.body.Dia + ' Asignado como Descanso')

        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Descanso"}})
        }

    }

    if(req.body.Tipo == 'Sin asignar'){

        //console.log('Dia : '+ req.body.Dia + ' Asignado como Descanso')

        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"Sin asignar"}})
        }
    }

    if(req.body.Tipo == 'No laborable'){

        console.log('Dia : '+ req.body.Dia + ' Asignado como No laborable')

        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.updateOne({"dia":req.body.Dia},{$set:{"tipo":"No laborable"}})
        }

    }

    //console.log(req.body)

    if(req.body.CrearTarea == 'True'){

        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.findOneAndUpdate({'dia':req.body.Dia},{$push:{'tareas':[{'titulo':req.body.Titulo,'descripcion':req.body.Descripcion}]}})
        }
        
    }

    if(req.body.EditarNuevaTarea == 'True'){
        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$set:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        }

        //console.log('tarea editada correctamente del dia '+ req.body.Dia)
    }

    if(req.body.EliminarTarea == 'True'){
        //await crearDia.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas.$.titulo":req.body.Titulo,"tareas.$.descripcion":req.body.Descripcion}})
        if(req.body.Mes == 'enero' || req.body.Mes == 'Enero'){
            await crearDia.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'febrero' || req.body.Mes == 'Febrero'){
            await connectFebrero.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'marzo' || req.body.Mes == 'Marzo'){
            await connectMarzo.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'abril' || req.body.Mes == 'Abril'){
            await connectAbril.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'mayo' || req.body.Mes == 'Mayo'){
            await connectMayo.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'junio' || req.body.Mes == 'Junio'){
            await connectJunio.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'julio' || req.body.Mes == 'Julio'){
            await connectJulio.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'agosto' || req.body.Mes == 'Agosto'){
            await connectAgosto.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'septiembre' || req.body.Mes == 'Septiembre'){
            await connectSeptiembre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'octubre' || req.body.Mes == 'Octubre'){
            await connectOctubre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'noviembre' || req.body.Mes == 'Noviembre'){
            await connectNoviembre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }
        if(req.body.Mes == 'diciembre' || req.body.Mes == 'Diciembre'){
            await connectDicembre.findOneAndUpdate({"dia":req.body.Dia, "tareas.titulo":req.body.TituloAEditar},{$pull:{"tareas":{"titulo":req.body.TituloAEditar}}})
        }

        //console.log('Intentado eliminar tarea')
    }
})

console.log('server On')
app.listen(port)
console.log('por ahora todo salio bien')