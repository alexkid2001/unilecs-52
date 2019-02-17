let m1 = [
        [1, 0, 1],
        [1, 1, 1], 
        [1, 1, 1], 
        [1, 1, 1]
    ];
let m2 = [
        [1, 1, 1], 
        [1, 0, 0], 
        [1, 1, 1]
    ];

function zeroingMatrix(matrix) {
    let rowZero = [];
    let colZero = [];

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {

            let valueIsZero = matrix[row][col] === 0;
            rowZero[row] = !rowZero[row] && valueIsZero ? true : rowZero[row];
            colZero[col] = !colZero[col] && valueIsZero ? true : colZero[col];
        }
    }

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix.lenth; col++) {
            if(rowZero[row] || colZero[col]) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
}

zeroingMatrix(m1).map(arr => console.info(...arr));


// function printArray(arr) {
//     var str;
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr[i].length; j++) {
//             arr[i][j];
//             // console.log(arr[i][j]);    
//         }
//         console.log[str];
//         str = '';
//     }
// }
// console.log(arr1[1]);

// console.table(arr1);
// printArray(arr1);
// console.log(arr1[1]);