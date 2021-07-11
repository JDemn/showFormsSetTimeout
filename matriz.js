//Problem: multiplication of two matrices with a function
givenAarr = (m1, m2) => {
    numberFil_m1 = m1.length;
    colum_m1 = m1[0].length;

    numberFil_m2 = m2.length;
    colum_m2 = m2[0].length;

    // can matrices be multiplied?

    if (colum_m1 != numberFil_m2) {
        throw "we can't do the multiplication between this matrices";
    };

    //multiplication matrice
    let multiplication = new Array(numberFil_m1);

    for (x = 0; x < multiplication.length; x++) {

        multiplication[x] = new Array(colum_m2).fill(0);
    };

    //Do product fila_1 * all elemts colum_m2
    for (x = 0; x < multiplication.length; x++) {
        for (y = 0; y < multiplication[x].length; y++) {
            for (z = 0; z < colum_m1; z++) {
                multiplication[x][y] = multiplication[x][y] + m1[x][z] * m2[z][y];
            }
        }
    }
    console.log(`multiplication result :  ${multiplication}`);
}
let m1 = [[1, 2, 3], [4, 5, 6]];
let m2 = [[7, 8], [9, 10], [11, 12]];
givenAarr(m1, m2);

//problem 2------------------------ order fordward an array 
ascendingOrder = (arr) => {

    arr.sort((a, b) => {
        return a - b
    });
    console.log(arr);
};

let arr = [1, 2, 3, 65];
ascendingOrder(arr);

//other way to do that
sortInAscendingOrder = (arr) => {
    let err = "the arr should have just 3 values";
    arr.length;
    arr > 3 ? err : arr.sort((a, b) => { return a - b });
    console.log(arr);
}

let arr = [452, 234, 2];
sortInAscendingOrder(arr);

//Is a palindrome ?
isPalindrome = (str) => {
    let arr = str.trim().toLowerCase().replace(/ /g, "").split('');

    let lastPositionArr = arr.length - 1;

    for (x = 0; x < arr.length; x++) {
        if (arr[x] === arr[lastPositionArr]) {
            lastPositionArr--;
        } else return false;
    }
    return true;
};

let str = '  anitaLAVA latsina         ';
isPalindrome(str);
/*if(isPalindrome(str)){
    console.log("si es")
}else{
    console.log("no es");
};*/