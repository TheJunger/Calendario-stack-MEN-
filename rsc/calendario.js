import {mostrarLabel, cerrarLabel, interaccionActividad, interaccionTareas} from "./labelOperations.js"
const flechaIzq = document.querySelector('.flechai')
const mes= document.querySelector('.navfecha')
const flechaDer= document.querySelector('.flechad')
const container = document.querySelector('.container')

const date = new Date()
const mesActual = date.toLocaleString(
    'es-ES',
    {month: 'long'}
);

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let mesContador = 0
//mes.textContent = meses[mesContador]
mes.textContent = mesActual.charAt(0).toUpperCase() + mesActual.slice(1);
let dian = 1
let diaextra = 0
let arrayColor = []


fetch('http://localhost:3000/calendario',{
    method:'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
})
.then(res => {

let contenedordeDias = document.createElement('div')

// son las operaciones del label , recibe el parametro divdia en numero
let labelOperations = (dia, ponerColor)=>{
    mostrarLabel(dia)
    cerrarLabel()
    interaccionActividad(dia, ponerColor)
    interaccionTareas(dia)
}

let ponerDias = ()=>{
    contenedordeDias.remove()
    contenedordeDias = document.createElement('div')
    contenedordeDias.classList.add('dias')
    container.appendChild(contenedordeDias)
    let nombredeDias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']

    for (let i = 0; i < 7; i++) {
        let nomdia = document.createElement('div')
        nomdia.classList.add('dial')
        nomdia.classList.add(nombredeDias[i])
        nomdia.textContent = nombredeDias[i]
        contenedordeDias.appendChild(nomdia)
    }

    dian = 1
    let primerosDias = 0
    let aumentarUltimosDias = 0

    let primerosDiasArray = ['lun1', 'mar1', 'mie1', 'jue1', 'vie1', 'sab1', 'dom1']
    let ultimosDiasArray = ['lun2', 'mar2', 'mie2', 'jue2', 'vie2', 'sab2', 'dom2']

    for (let i = 1; i < 36; i++) {
        let divdia = document.createElement('div')
        divdia.classList.add('dia')
        contenedordeDias.appendChild(divdia)
        divdia.textContent = ''

        if(primerosDias < 7){
            divdia.classList.add(primerosDiasArray[primerosDias])
            primerosDias++
        }
        if(i > 28){
            divdia.classList.add(ultimosDiasArray[aumentarUltimosDias])
            aumentarUltimosDias++
        }
    }

    const diaExtra = document.createElement('div')
    diaExtra.classList.add('dia')
    contenedordeDias.appendChild(diaExtra)
    diaExtra.textContent = 'put'
    diaExtra.style.display = 'inline'   

    const diaExtra2 = document.createElement('div')
    diaExtra2.classList.add('dia')
    contenedordeDias.appendChild(diaExtra2)
    diaExtra2.textContent = 'put'
    diaExtra2.style.display = 'inline'   

    const diaExtra3 = document.createElement('div')
    diaExtra3.classList.add('dia')
    contenedordeDias.appendChild(diaExtra3)
    diaExtra3.textContent = 'put'
    diaExtra3.style.display = 'inline'  

    if(diaextra == 0){
        diaExtra.style.display = 'none'
        diaExtra2.style.display = 'none'
        diaExtra3.style.display = 'none'
        if(dian >= 31){
            dian = 1
        }  
    }

    else if(diaextra == 1) {
        //console.log('reconocido un dia extra')
        diaExtra.style.display = 'inline'            
        diaExtra2.style.display = 'none'
        diaExtra3.style.display = 'none'
        
        if(mes.textContent == 'Marzo'){
            diaExtra.style.display = 'none'
            diaExtra2.style.display = 'none'
        }
        if(mes.textContent == 'Julio' ){
            diaExtra.style.display = 'inline'
            diaExtra2.style.display = 'none'
            diaExtra3.style.display = 'none'
        }
        if(mes.textContent == 'Agosto'){
            diaExtra.style.display = 'none'
            diaExtra2.style.display = 'none'
            diaExtra3.style.display = 'none'
        }
        if(mes.textContent == 'Diciembre'){
            diaExtra.style.display = 'none'
            diaExtra2.style.display = 'none'
        }
        if(mes.textContent == 'Enero' || mes.textContent == 'Octubre'){
            diaExtra.style.display = 'inline'
            diaExtra2.style.display = 'inline'
        }
        if(mes.textContent == 'Mayo'){
            diaExtra.style.display = 'inline'
            diaExtra2.style.display = 'inline'
            diaExtra3.style.display = 'inline'
        }
        if(dian >= 32){
            dian = 1
        }
    }

    else if(diaextra == 2){
        diaExtra.style.display = 'none'
        diaExtra2.style.display = 'none'
        diaExtra3.style.display = 'none'
        if(dian >= 29){
            dian = 1
        }
    }
}
// de aca sale el dia.foreach 
let ponerNumerosalosDias = ()=>{
    const dia = document.querySelectorAll('.dia')
    dia.forEach(divdia =>{
        if(divdia.textContent == 'put'){
            divdia.classList.add('estemes')
            divdia.textContent = dian
            divdia.addEventListener('click',()=>{
                //labelFecha.textContent = (`${divdia.textContent} de ${mes.textContent}`)
                //console.log('-------------------------------------------------------------')
                //console.log('dia reconocido desde calendario.js ' + divdia.textContent)
                labelOperations(divdia.textContent, divdia)
            })

            dian++
            }
        })

        //abre el label recibiendo el parametro divdia que en teoria es un foreach que detecta que dia en numero se selecciono
}

let mesCheck = ()=>{
    if(mes.textContent == 'Enero'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')
        const vie1 = document.querySelector('.vie1')
        const sab1 = document.querySelector('.sab1')
        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })

        const dias = [lun1, mar1, mie1, jue1, vie1, sab1]
        lun1.textContent = 26
        mar1.textContent = 27
        mie1.textContent = 28
        jue1.textContent = 29
        vie1.textContent = 30
        sab1.textContent = 31

        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
        
    }
    if(mes.textContent == 'Febrero'){
        arrayColor = []
        diaextra=2
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')

        const mie2 = document.querySelector('.mie2')
        const jue2 = document.querySelector('.jue2')
        const vie2 = document.querySelector('.vie2')
        const sab2 = document.querySelector('.sab2')
        const dom2 = document.querySelector('.dom2')

        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })

        const dias = [lun1,mar1]
        const dias2 = [mie2, jue2, vie2, sab2, dom2]
        lun1.textContent = 30
        mar1.textContent = 31 
        mie2.textContent = 1
        jue2.textContent = 2
        vie2.textContent = 3
        sab2.textContent = 4
        dom2.textContent = 5
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Marzo'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        
        const sab2 = document.querySelector('.sab2')
        const dom2 = document.querySelector('.dom2')

        const dia = document.querySelectorAll('.dia')
        
        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1]
        const dias2 = [sab2, dom2]
        lun1.textContent = 27
        mar1.textContent = 28
        sab2.textContent = 1
        dom2.textContent = 2
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Abril'){
        arrayColor = []
        diaextra=0
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')
        const vie1 = document.querySelector('.vie1')

        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1,jue1,vie1]
        lun1.textContent = 27
        mar1.textContent = 28
        mie1.textContent = 29
        jue1.textContent = 30
        vie1.textContent = 31
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    //////console.log(resArray[i].tipo)
                    //////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Mayo'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')
        const vie1 = document.querySelector('.vie1')
        const sab1 = document.querySelector('.sab1')
        const dom1 = document.querySelector('.dom1')

        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1,jue1,vie1,sab1,dom1]
        const dias2 = []
        lun1.textContent = 24
        mar1.textContent = 25
        mie1.textContent = 26
        jue1.textContent = 27 
        vie1.textContent = 28 
        sab1.textContent = 29
        dom1.textContent = 30
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Junio'){
        arrayColor = []
        diaextra=0
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')

        const sab2 = document.querySelector('.sab2')
        const dom2 = document.querySelector('.dom2')

        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1]
        const dias2 = [sab2,dom2]
        lun1.textContent = 29
        mar1.textContent = 30
        mie1.textContent = 31
        sab2.textContent = 1
        dom2.textContent = 2
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Julio'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')
        const vie1 = document.querySelector('.vie1')            
        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1,jue1,vie1]
        const dias2 = []
        lun1.textContent = 26
        mar1.textContent = 27
        mie1.textContent = 28
        jue1.textContent = 29
        vie1.textContent = 30
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Agosto'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const vie2 = document.querySelector('.vie2')
        const sab2 = document.querySelector('.sab2')
        const dom2 = document.querySelector('.dom2')

        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1]
        const dias2 = [vie2,sab2,dom2]
        lun1.textContent = 31
        vie2.textContent = 1
        sab2.textContent = 2
        dom2.textContent = 3
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Septiembre'){
        arrayColor = []
        diaextra=0
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')

        const dom2 = document.querySelector('.dom2')

        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1,jue1]
        const dias2 = [dom2]
        lun1.textContent = 28
        mar1.textContent = 29
        mie1.textContent = 30
        jue1.textContent = 31
        dom2.textContent = 1
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Octubre'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')
        const vie1 = document.querySelector('.vie1')
        const sab1 = document.querySelector('.sab1')
        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1,jue1,vie1, sab1]
        const dias2 = []
        lun1.textContent = 25
        mar1.textContent = 26
        mie1.textContent = 27
        jue1.textContent = 28
        vie1.textContent = 29
        sab1.textContent = 30
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Noviembre'){
        arrayColor = []
        diaextra=0
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')

        const vie2 = document.querySelector('.vie2')
        const sab2 = document.querySelector('.sab2')
        const dom2 = document.querySelector('.dom2')
        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1]
        const dias2 = [vie2,sab2,dom2]
        lun1.textContent = 30
        mar1.textContent = 31
        vie2.textContent = 1
        sab2.textContent = 2
        dom2.textContent = 3
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
    if(mes.textContent == 'Diciembre'){
        arrayColor = []
        diaextra=1
        ponerDias()

        const lun1 = document.querySelector('.lun1')
        const mar1 = document.querySelector('.mar1')
        const mie1 = document.querySelector('.mie1')
        const jue1 = document.querySelector('.jue1')
        const dia = document.querySelectorAll('.dia')

        dia.forEach(cambio =>{
            cambio.textContent = 'put'
            cambio.style.color = '#222'
        })
        const dias = [lun1,mar1,mie1]
        const dias2 = []
        lun1.textContent = 27
        mar1.textContent = 28
        mie1.textContent = 29
        jue1.textContent = 30
        dias.forEach(mesAnterior =>{
            mesAnterior.style.color = 'gray'
        })
        dias2.forEach(mesSiguiente =>{
            mesSiguiente.style.color = 'gray'
        })
        ponerNumerosalosDias()
        fetch('http://localhost:3000/calendario',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
            })
            .then(res => res.json())
            .then(res =>{
                arrayColor = document.querySelectorAll('.estemes')
                let resArray = []
                res.forEach(element => {
                    resArray.push(element)
                });
                for (let i = 0; i < resArray.length; i++) {
                    ////console.log(resArray[i].tipo)
                    ////console.log(arrayColor[i])
                    if(resArray[i].tipo =='Trabajo'){
                        arrayColor[i].style.backgroundColor = 'lightblue'
                    }
                    if(resArray[i].tipo =='Descanso'){
                        arrayColor[i].style.backgroundColor = 'gold'
                    }
                    if(resArray[i].tipo =='No laborable'){
                        arrayColor[i].style.backgroundColor = 'rgb(71, 221, 71)'
                    }
                    
                }
            })
    }
}

let eliminarClase = ()=>{
    const dia = document.querySelectorAll('.dia')
    dia.forEach(dias =>{
        dias.classList.remove('estemes')
    })
}

flechaDer.addEventListener('click',()=>{
    if(mesContador < 11){
        mesContador++
        //console.log('cambio de mes')
        mes.textContent = meses[mesContador]
        eliminarClase()
        mesCheck()
        fetch('http://localhost:3000/calendario',{
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
        })

    }
    if(mes.textContent == 'Diciembre'){
        flechaDer.style.color = 'gray'
        flechaDer.style.backgroundColor = 'rgb(233, 233, 233)'
    }
    if(mes.textContent !== 'Diciembre'){
        flechaDer.style.color = '#222'
        flechaDer.style.backgroundColor = 'rgb(217, 255, 217)'
    }
    if(mes.textContent !== 'Enero'){
        flechaIzq.style.color = '#222'
        flechaIzq.style.backgroundColor = 'rgb(217, 255, 217)'
    }
})

flechaIzq.addEventListener('click',()=>{
    if(mesContador > 0){
        mesContador--
        //console.log('cambio de mes')
        mes.textContent = meses[mesContador]
        eliminarClase()
        mesCheck()
        fetch('http://localhost:3000/calendario',{
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"Mes":mes.textContent.toLowerCase()})
        })
    }
    if(mes.textContent == 'Enero'){
        flechaIzq.style.color = 'gray'
        flechaIzq.style.backgroundColor = 'rgb(233, 233, 233)'
    }
    if(mes.textContent !== 'Enero'){
        flechaIzq.style.color = '#222'
        flechaIzq.style.backgroundColor = 'rgb(217, 255, 217)'
    }
    if(mes.textContent !== 'Diciembre'){
        flechaDer.style.color = '#222'
        flechaDer.style.backgroundColor = 'rgb(217, 255, 217)'
    }
})
mesCheck()
})