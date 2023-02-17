let array = [{
        id: 0,
        nombre: "obj 1",
        fechaI: new Date('2023-01-12').getTime(),
        fechaF: new Date('2023-02-12').getTime()
    },
    {
        id: 1,
        nombre: "obj 2",
        fechaI: new Date('2023-02-13').getTime(),
        fechaF: new Date('2023-03-12').getTime()
    }

]  

function diasDiferencia(diasDeDiferencia){
    for(let i = 0; i < array.length; i++){
        let diferencia = array[i].fechaF - array[i].fechaI
        let diasDeDiferencia = diferencia / (1000*60*60*24)
        console.log(diasDeDiferencia);
    }
    return diasDeDiferencia
}
console.log("HOLA MUNDO")
correrArreglo();