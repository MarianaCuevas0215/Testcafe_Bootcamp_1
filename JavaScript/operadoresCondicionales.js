//Operadores condicionales

let edad = 29
let masDe18

if (edad < 18){
    console.log("No alcohol")
    masDe18 = false
} else {
    console.log("Salud")
    masDe18 = true
}

console.log(masDe18)
//Operador terniario
masDe18 = (edad < 18) ?  false : true

console.log(masDe18)