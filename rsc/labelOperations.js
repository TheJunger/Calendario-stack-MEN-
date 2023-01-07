// const labelContainer = document.querySelector('.labelcontainer')
// const botonCerrar = document.querySelector('.closebutton')
// const activitySet = document.querySelector(".activityeditset")
// const actualActivity = document.querySelector('.labelfactivity')
// const addTarea = document.querySelector('.labeladdtask')
// const contenedordeFecha = document.querySelector('.fechacont')
// const contenedordelcontenedordetareas = document.querySelector('.contenedordelcontenedordetareas')
// const activityAsing = document.querySelector('.estableceractividadlabel')
// const setWork = document.querySelector('.establecertrabajo')
// const setFree = document.querySelector('.establecerdescanso')
// const setCancel = document.querySelector('.establecercancelar')

const mes= document.querySelector('.navfecha')

let labelAbierto = 0

//simplemente baja el label a -5vh
let mostrarLabel = (dia) =>{

    if(labelAbierto == 0){
        const labelContainer = document.createElement('div')
        const botonCerrar = document.createElement('div') //closebutton
        const label = document.createElement('div')
         const contenedordeFecha = document.createElement('div') //fechacont
          const labelffecha = document.createElement('div')
          const actualActivity = document.createElement('div') //labelfactivity
         const activitysetcontainer = document.createElement('div')
          const activitySet = document.createElement('p') //activityeditset
          const addTarea = document.createElement('p') //labeladdtask
         const contenedordelcontenedordetareas = document.createElement('div')
          const tareastitle = document.createElement("div")
          const labeltareas = document.createElement('div')
   
       labelContainer.classList.add('labelcontainer')
       botonCerrar.classList.add('closebutton')
       label.classList.add('label')
       contenedordeFecha.classList.add('fechacont')
       labelffecha.classList.add('labelffecha')
       actualActivity.classList.add('labelfactivity')
       activitysetcontainer.classList.add('activitysetcontainer')
       activitySet.classList.add('activityeditset')
       addTarea.classList.add('labeladdtask')
       contenedordelcontenedordetareas.classList.add('contenedordelcontenedordetareas')
       tareastitle.classList.add('tareastitle')
       labeltareas.classList.add('labeltareas')
   
       document.body.appendChild(labelContainer)
       labelContainer.appendChild(botonCerrar)
       labelContainer.appendChild(label)
   
       label.appendChild(contenedordeFecha)
       label.appendChild(activitysetcontainer)
       label.appendChild(contenedordelcontenedordetareas)
   
       contenedordeFecha.appendChild(labelffecha)
       contenedordeFecha.appendChild(actualActivity)
   
       activitysetcontainer.appendChild(activitySet)
       activitysetcontainer.appendChild(addTarea)
   
       contenedordelcontenedordetareas.appendChild(tareastitle)
       contenedordelcontenedordetareas.appendChild(labeltareas)
   
       botonCerrar.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
   
       addTarea.textContent = 'Añadir Tarea'
       tareastitle.textContent = 'Tareas'
       labelffecha.textContent = `${dia} de ${mes.textContent}`
   
       labelContainer.style.top = '-5vh'

        console.log(labelAbierto + ' De mostrar label')

    }
    else{
        console.log('Ya hay un dia abierto')
    }

}

let setDia = (dia)=>{
    //selecciones del mostrarLabel()
    const activitySet = document.querySelector(".activityeditset")
    const actualActivity = document.querySelector('.labelfactivity')
    const contenedordeFecha = document.querySelector('.fechacont')
    //crear el estableceractividadlabel
    const activityAsing = document.createElement('div')
    activityAsing.style.top = '-500vh'
     const setWork = document.createElement('div')
     const setFree = document.createElement('div')
     const setUnasign = document.createElement('div')
     const setNoWork = document.createElement('div')
     const setCancel = document.createElement('div')

    activityAsing.classList.add('estableceractividadlabel')
    setWork.classList.add('establecertrabajo')
    setFree.classList.add('establecerdescanso')
    setUnasign.classList.add('establecersinasignar')
    setNoWork.classList.add('establecernotrabajo')
    setCancel.classList.add('establecercancelar')

    setWork.textContent = "Establecer dia como 'Trabajo'"
    setFree.textContent = "Establecer dia como 'Descanso'"
    setNoWork.textContent = "Establecer dia como 'No laborable'"
    setUnasign.textContent = "Establecer dia como 'Sin Asignar'"
    setCancel.textContent = "Cancelar"

    document.body.appendChild(activityAsing)
    activityAsing.appendChild(setWork)
    activityAsing.appendChild(setFree)
    activityAsing.appendChild(setNoWork)
    activityAsing.appendChild(setUnasign)
    activityAsing.appendChild(setCancel)

    //Baja el label de set activity
    activitySet.addEventListener('click', ()=>{
            activityAsing.style.top = '-5vh'

            //Event listeners del label para poner una actividad
            setWork.addEventListener('click', ()=>{
                activityAsing.style.top = '-500vh'
                //para hacerlo dinamico
                actualActivity.textContent = 'Dia de Trabajo'
                contenedordeFecha.style.backgroundColor = 'lightblue'
                console.log('Dia del setwork en LabelOperations ' + dia)
                activityAsing.remove()

                fetch('http://localhost:3000/calendario',{
                    method:'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"Dia":dia, "Tipo":"Trabajo", "Mes":mes.textContent})
                })
                .then(res => res.json())
                .then(res => {'Enviado desde el front ' + console.log(res)})
            })

            setFree.addEventListener('click', ()=>{
                activityAsing.style.top = '-500vh'
                actualActivity.textContent = 'Dia de Descanso'
                contenedordeFecha.style.backgroundColor = 'gold'

                fetch('http://localhost:3000/calendario',{
                    method:'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"Dia":dia, "Tipo":"Descanso", "Mes":mes.textContent})
                })
                .then(res => res.json())
                .then(res => {'Enviado desde el front ' + console.log(res)})
            })

            setNoWork.addEventListener('click', ()=>{
                activityAsing.style.top = '-500vh'
                actualActivity.textContent = 'Dia No Laborable'
                contenedordeFecha.style.backgroundColor = 'rgb(71, 221, 71)'

                fetch('http://localhost:3000/calendario',{
                    method:'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"Dia":dia, "Tipo":"No laborable", "Mes":mes.textContent})
                })
                .then(res => res.json())
                .then(res => {'Enviado desde el front ' + console.log(res)})
            })
            
            setUnasign.addEventListener('click', ()=>{
                activityAsing.style.top = '-500vh'
                actualActivity.textContent = 'Sin Asignar'
                contenedordeFecha.style.backgroundColor = 'white'

                fetch('http://localhost:3000/calendario',{
                    method:'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"Dia":dia, "Tipo":"Sin asignar", "Mes":mes.textContent})
                })
                .then(res => res.json())
                .then(res => {'Enviado desde el front ' + console.log(res)})
            })

            setCancel.addEventListener('click', ()=>{
                activityAsing.style.top = '-500vh'
        
        })
    })
}

let interaccionActividad = (dia, ponerColor) =>{

    if(labelAbierto == 0){
    const activitySet = document.querySelector(".activityeditset")
    const actualActivity = document.querySelector('.labelfactivity')
    const contenedordeFecha = document.querySelector('.fechacont')
    //obtiene el dia desde mongodb y establece el tipo de dia
    fetch('http://localhost:3000/calendario',{
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"Dia":dia, "Mes":mes.textContent})
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log('Respuesta del backend ' + res[dia -1].tipo)
        if(res[dia -1].tipo == 'Trabajo'){
            actualActivity.textContent = `Dia de ${res[dia -1].tipo}`
            activitySet.textContent = 'Modificar Actividad'
            contenedordeFecha.style.backgroundColor = 'lightblue'
            //pendiente color del background de los dias
        }
        else if(res[dia -1].tipo == 'Descanso'){
            actualActivity.textContent = `Dia de ${res[dia -1].tipo}`
            activitySet.textContent = 'Modificar Actividad'
            contenedordeFecha.style.backgroundColor = 'gold'
            //dia.style.backgroundColor = 'gold'
        }
        else{
            actualActivity.textContent = 'Dia sin Asignar'
            activitySet.textContent = 'Establecer Actividad'
            contenedordeFecha.style.backgroundColor = 'white'
        }
    })
    //
    setDia(dia)

    }
    else{
        console.log('Ya hay un dia abierto')
    }
}

//
let interaccionTareas = (dia) =>{
    //selectores del setdia
    const addTarea = document.querySelector('.labeladdtask')
    const contenedordelcontenedordetareas = document.querySelector('.contenedordelcontenedordetareas')

    //crear label
    if(labelAbierto == 0){

    addTarea.addEventListener('click', ()=>{
       const tareaLabel = document.createElement('div') //addtarealabel
       const addtarealabeltitle = document.createElement('div')
       const atlttitle = document.createElement('div')
       const titulodelaTareanueva = document.createElement('input') //atlttitleinput
       titulodelaTareanueva.type = 'text'
       titulodelaTareanueva.placeholder = 'Ingresa el titulo'
       const addtarealabeldesc = document.createElement('div')
       const atldtitle = document.createElement('div')
       const descripciondelaTareanueva = document.createElement('textarea') //atlddesc
       descripciondelaTareanueva.cols = '30'
       descripciondelaTareanueva.rows = '10'
       descripciondelaTareanueva.placeholder = 'Ingresa la descripcion de la tarea'
       const btncont = document.createElement('div')
       const addTareaButton = document.createElement('input')
       addTareaButton.type = 'button'
       addTareaButton.value = 'Añadir Tarea'
       const cancelarTareaButton = document.createElement('input')
       cancelarTareaButton.type = 'button'
       cancelarTareaButton.value = 'Cancelar'

       tareaLabel.classList.add('addtarealabel')
       addtarealabeltitle.classList.add('addtarealabeltitle')

       atlttitle.classList.add('atlttitle')
       atlttitle.textContent = 'Ingresa el titulo de la tarea'

       titulodelaTareanueva.classList.add('atlttitleinput')
       addtarealabeldesc.classList.add('addtarealabeldesc')
       atldtitle.classList.add('atldtitle')
       atldtitle.textContent = 'Ingresa la descripcion de la tarea'
       descripciondelaTareanueva.classList.add('atlddesc')
       btncont.classList.add('btncont')
       addTareaButton.classList.add('addtarealabelbutton')
       cancelarTareaButton.classList.add('canceltarealabelbutton')
    
       document.body.appendChild(tareaLabel)
       tareaLabel.appendChild(addtarealabeltitle)
       addtarealabeltitle.appendChild(atlttitle)
       addtarealabeltitle.appendChild(titulodelaTareanueva)
       tareaLabel.appendChild(addtarealabeldesc)
       addtarealabeldesc.appendChild(atldtitle)
       addtarealabeldesc.appendChild(descripciondelaTareanueva)
       tareaLabel.appendChild(btncont)
       btncont.appendChild(cancelarTareaButton)
       btncont.appendChild(addTareaButton)
       tareaLabel.style.top = '-5vh'

       //interaccion con los botones
       addTareaButton.addEventListener('click', ()=>{
            console.log('titulo: '+ titulodelaTareanueva.value)
            console.log('descripcion: '+ descripciondelaTareanueva.value)
            fetch('http://localhost:3000/calendario',{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"Dia":dia, "CrearTarea":"True", "Titulo":titulodelaTareanueva.value, "Descripcion":descripciondelaTareanueva.value, "Mes":mes.textContent})
            })
            .then(res => res.json())
            .then(res =>{'Enviado desde el front ' + console.log(res)})
            tareaLabel.remove()
        })

        cancelarTareaButton.addEventListener('click', ()=>{
            tareaLabel.remove()
        })
    })

    //mostrar tareas
    //console.log(mesescont[dia-1].tareas.length)
    fetch('http://localhost:3000/calendario',{
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"Dia":dia, "Mes":mes.textContent})
    })
    .then(res => res.json())
    .then(res =>{
        console.log('--------------------------------------------------')
        console.log(res[dia -1])
        console.log('--------------------------------------------------')
        console.log(res[dia -1].tareas)
        if(res[dia -1].tareas.length > 0){
            for (let i = 0; i < res[dia -1].tareas.length; i++) {
                let id = i
                const nuevaTareaTt = document.createElement('div')
                const nuevaTareaDs = document.createElement('div')
                const nuevaTareaCont = document.createElement('div')

                const crudTask = document.createElement('div')
                const deleteTask = document.createElement('div')
                const editTask = document.createElement('div')
                const titleCont = document.createElement('div')

                crudTask.appendChild(editTask)
                crudTask.appendChild(deleteTask)
                deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>'
                editTask.innerHTML = '<i class="fa-solid fa-pencil"></i>'

                titleCont.appendChild(nuevaTareaTt)
                titleCont.appendChild(crudTask)

                //titleCont.appendChild(nuevaTareaTt)
                titleCont.classList.add('titleCont')
                crudTask.classList.add('crudTask')

                nuevaTareaTt.classList.add('tasktitle')
                nuevaTareaDs.classList.add('taskdesc')
                nuevaTareaTt.textContent = res[dia -1].tareas[i].titulo
                nuevaTareaDs.textContent = res[dia -1].tareas[i].descripcion

                editTask.addEventListener('click',()=>{

                    const editTarea = document.createElement('div')
                    const nuevoTituloCont = document.createElement('div')
                    const nuevoTitulo = document.createElement('div')
                    const nuevoTituloInput = document.createElement('input')
                    const nuevoDescCont = document.createElement('div')
                    const nuevoDesc = document.createElement('div')
                    const nuevoDescInput = document.createElement('textarea')
                    const editButton = document.createElement('input')
                    const cancelButton = document.createElement('input')
                    const buttonCont = document.createElement('div')
                
                    editTarea.classList.add('addtarealabel')
                    nuevoTitulo.classList.add('atlttitle')
                    nuevoTitulo.textContent = 'Editar el Titulo'
                    nuevoTituloInput.classList.add('atlttitleinput')
                    nuevoTituloInput.type = 'text'
                    nuevoTituloInput.placeholder = 'Ingresa el nuevo titulo'
                    nuevoDesc.classList.add('atldtitle')
                    nuevoDesc.textContent = 'Editar Descripcion'
                    nuevoDescInput.classList.add('atlddesc')
                    nuevoDescInput.cols = '30'
                    nuevoDescInput.rows = '10'
                    nuevoDescInput.placeholder = 'Ingresa la descripcion de la tarea'
                    editButton.classList.add('addtarealabelbutton')
                    cancelButton.classList.add('canceltarealabelbutton')
                    nuevoTituloCont.classList.add('addtarealabeltitle')
                    nuevoDescCont.classList.add('addtarealabeldesc')
                    buttonCont.classList.add('btncont')

                    editButton.type = 'button'
                    editButton.value = 'Editar Tarea'

                    cancelButton.type = 'button'
                    cancelButton.value = 'Cancelar'
                
                    document.body.appendChild(editTarea)
                    editTarea.appendChild(nuevoTituloCont)
                    editTarea.appendChild(nuevoDescCont)
                    nuevoTituloCont.appendChild(nuevoTitulo)
                    nuevoTituloCont.appendChild(nuevoTituloInput)
                    nuevoDescCont.appendChild(nuevoDesc)
                    nuevoDescCont.appendChild(nuevoDescInput)
                    buttonCont.appendChild(cancelButton)
                    buttonCont.appendChild(editButton)
                    editTarea.appendChild(buttonCont)
                    editTarea.style.top = '-5vh'

                           //interaccion con los botones
                           //editar tareas
                       editButton.addEventListener('click', ()=>{
                        console.log('boton edit reconocido')
                        console.log('titulo: '+ nuevoTituloInput.value)
                        console.log('descripcion: '+ nuevoDescInput.value)
                        fetch('http://localhost:3000/calendario',{
                            method:'POST',
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({"Dia":dia, "EditarNuevaTarea":"True", "Titulo":nuevoTituloInput.value,         "Descripcion":nuevoDescInput.value,"IdTarea":id, "TituloAEditar":titleCont.textContent, "Mes":mes.textContent})
                        })
                        .then(res => res.json())
                        .then(res =>{'Enviado desde el front ' + console.log(res)})
                            editTarea.remove()
                            history.go()
                        })

                        //elimiar tareas
                    cancelButton.addEventListener('click', ()=>{
                            editTarea.remove()
                        })
                    console.log(res[dia -1].tareas[i].titulo + ' Reconocido')

                })

                deleteTask.addEventListener('click',()=>{
                    console.log('boton delete reconocido')
                    fetch('http://localhost:3000/calendario',{
                        method:'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({"Dia":dia, "EliminarTarea":"True", "Titulo":'', "Descripcion":'', "IdTarea":id, "TituloAEditar":titleCont.textContent, "Mes":mes.textContent})
                        })
                        .then(res => res.json())
                        .then(res =>{})
                })


                nuevaTareaCont.appendChild(titleCont)

                nuevaTareaCont.appendChild(nuevaTareaDs)
      
                const contenedordetareas = document.createElement('div')
                contenedordetareas.classList.add('labeltareas')
                contenedordelcontenedordetareas.appendChild(contenedordetareas)
                contenedordetareas.appendChild(nuevaTareaCont)
            }
        }
        else{
            const nuevaTareaTt = document.createElement('div')
            const nuevaTareaDs = document.createElement('div')
            const nuevaTareaCont = document.createElement('div')
            nuevaTareaTt.classList.add('tasktitle')
            nuevaTareaDs.classList.add('taskdesc')
            nuevaTareaTt.textContent = 'Sin Tareas'
            nuevaTareaDs.textContent = 'Aun no hay tareas para este dia!'
            nuevaTareaCont.appendChild(nuevaTareaTt)
            nuevaTareaCont.appendChild(nuevaTareaDs)
    
            const contenedordetareas = document.createElement('div')
            contenedordetareas.appendChild(nuevaTareaCont)
            contenedordetareas.classList.add('labeltareas')
            contenedordelcontenedordetareas.appendChild(contenedordetareas)
        }
    })
    labelAbierto = 1
    console.log(labelAbierto + ' De Interaccion tareas')
    }
    else{
        console.log('Ya hay un dia abierto')
    }
}

let cerrarLabel = () =>{
    const labelContainer = document.querySelector('.labelcontainer')
    const botonCerrar = document.querySelector('.closebutton')
    botonCerrar.addEventListener('click', ()=>{
        labelContainer.remove()
        labelAbierto = 0
    })
}



export {mostrarLabel, cerrarLabel, interaccionActividad, interaccionTareas}