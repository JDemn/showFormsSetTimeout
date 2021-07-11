let arreglo = [1,2,3,4,5,6];
//imprimir arreglo hasta la mitad
for(let i = 0; i<arreglo.length /2; i++){
    console.log(arreglo[i]);
}

let arreglo = [1,2,3];
for(let fila = 0; fila<arreglo.length; fila++ ){
    console.log(arreglo[fila]);
    for(j = 0; j<arreglo.length; j++){
        console.log(j);
    };
};

// matrices   el numero de columnas de m1 debe ser igual al número de filas de la matriz m2
let m1 = [[1,2,3],[4,5,6]];
let m2= [[7,8],[9,10],[11,12]]

//principal element are the row and each one element inside every array are the colums
//calculate rows numbers in m
fil_1 = m1.length;
console.log(fil_1);
colum_m1 = m1[0].length;

//rows and columns inside m2
fil_m2 = m2.length;
colum_m2 = m2[0].length;

if(colum_m1 != fil_m2){
    throw "No se puden multiplicar las matrices";
};
//matriz que guardará el resultado de la multiplicación
let multiplicacion = new Array(fil_1);
for(x=0; x<multiplicacion.length; x++){
    
    multiplicacion[x] = new Array(colum_m2).fill(0);
};
//Do product fila_1 * all elemts colum_m2
for(x = 0; x < multiplicacion.length;x++){
    for(y = 0; y < multiplicacion[x].length; y++){
        for(z = 0; z < colum_m1; z++){
            multiplicacion [x][y] = multiplicacion [x][y] + m1[x][z] * m2[z][y];
            console.log(multiplicacion);
        };
    };
};
