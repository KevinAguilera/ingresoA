/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
    let temperatura;
    let sexo;
    let edad;
    let mayorTemperatura;
    let nombreMayorTemperatura;
    let flagMayorTemperatura = 0;
    let contadorHombre = 0;
    let contadorMujer = 0;
    let acumPersonas = 0;
    let promedioEdad;


    for(let i = 0;i < 5; i++){

        nombre = prompt("Ingrese su nombre");
        while(!(isNaN(nombre))){
            nombre = prompt("Nombre inválido. Ingrese su nombre");
        }
    
        temperatura = parseInt(prompt("Ingrese su temperatura corporal (entre 35 y 50)"));
        while(!(temperatura >= 35 && temperatura <= 50 )){
            temperatura = parseInt(prompt("Temperatura inválida. Ingrese temperatura mínima(entre 35 y 50)"));
        }

       sexo = prompt("Ingrese su sexo(f o m)").toLowerCase();
        while(!(sexo == 'f' || sexo == 'm')){
            sexo = prompt('sexo inválido. Ingrese f o m').toLowerCase();
        }

        edad = parseInt(prompt("Ingrese su edad: "));
        while(!(edad > 0 && edad < 150)){
            edad = parseInt(prompt("Edad invalida. Ingrese su edad"));
        }
        
        acumPersonas+= edad;


        switch(sexo){
            case "f":
                contadorMujer++;
                
                if(flagMayorTemperatura == 0 || temperatura > mayorTemperatura){

                    mayorTemperatura = temperatura;
                    nombreMayorTemperatura = nombre;
                    flagMayorTemperatura = 1;
                }
                break;
            case "m":
                contadorHombre++;

                break;
        }
    }

        promedioEdad = acumPersonas / 5;

        document.write(" A) Cantidad de mujeres: " + contadorMujer + " Cantidad de hombres: "+ contadorHombre +"</br>");
        document.write(" B) Edad promedio total: " + promedioEdad);

        if(flagMayorTemperatura == 0){
            document.write( "No hay mujeres" + "</br>");
        }else{
            document.write(" C) Mujer con más temperatura: " + nombreMayorTemperatura + "</br>");
        }
}
