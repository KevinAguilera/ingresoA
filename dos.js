/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let kilos;
  let tipo;
  let acumKilos = 0;
  let contadorLiquido = 0;
  let contadorSolido = 0;
  let liquidoCaro;
  let marcaCara;
  let solidoLiviano;
  let marcaSolidoLiviano;
  let seguir;
  let flagLiquidoCaro = 0;
  let flagSolidoLiviano = 0;


  do{

    marca = prompt("Ingrese una marca: ");
    while(!(isNaN(marca))){
         marca = prompt("Marca inválida. Ingrese una marca");
    }
    
    precio = parseFloat(prompt("Ingrese precio: "));
	while(precio <= 0 || isNaN(precio)){
		precio = parseFloat(prompt("Precio inválido. Ingrese preci: "));
	}
	
    kilos = parseInt(prompt("Ingrese kilos: "));
    while(kilos <= 0 || isNaN(kilos)){
        kilos = parseInt(prompt("Error. Ingrese kilos: "));
    }

    tipo = prompt("Ingrese tipo (solido o liquido)");
    while(tipo != "solido" && tipo != "liquido"){
        tipo = prompt("Tipo invalido. Ingrese tipo solido o liquido");
    }

    acumKilos += kilos;

    switch(tipo){
        case "liquido":
            contadorLiquido++;

            if(flagLiquidoCaro == 0 || precio > liquidoCaro){
                liquidoCaro = precio;
                marcaCara = marca;
                flagLiquidoCaro = 1;
            }

            break;
        case "solido":
            contadorSolido++;

            if(flagSolidoLiviano == 0 || kilos < solidoLiviano){
                solidoLiviano = kilos;
                marcaSolidoLiviano = marca;
                flagSolidoLiviano = 1;
            }
            
            break;
    }

    seguir = prompt("Quiere ingresar otra marca?");
  }while(seguir == "s");
  

    document.write(" A) Peso total de la compra: " + acumKilos + "</br>");

    if(flagLiquidoCaro == 0){
        document.write( "B) No hay liquidos" + "</br>");

    }else{
        document.write(" B) Marca del más caro de los líquidos: " + marcaCara + "</br>");
    }

    if(flagSolidoLiviano == 0){
        document.write( "C) No hay sólidos");
    
    }else{
        document.write(" C) Marca del más liviano de los sólidos: " + marcaSolidoLiviano + "</br>");
    }
}
