'use strict';

const count = 10;
let arr = new Array(count);

function fillTable() {
    for (let i = 0; i < count; ++i) {
        arr[i] = new Array(count);
        for (let j = 0; j < count; ++j) {
            arr[i][j] = i * 10 + j + 1;
        }
    }
}

fillTable();

function showTable() {
    for (let i = 0; i < count; ++i) {
        for (let j = 0; j < count; ++j) {
            document.write(arr[i][j] +" ");
        }
            document.write("<br/>");
    }
}

showTable();

console.log(arr);
