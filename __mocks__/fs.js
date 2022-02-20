'use strict';

// import  path  from 'path';

const fs = jest.createMockFromModule('fs');



// let mockFiles = Object.create(null);
// function __setMockData(newMockData) {
//     mockFiles = Object.create(null);

// }

function writeFileSync(filename,data) {
  throw 'error';   
}

// function miFuncion() {
//     return 'a';
// }

function opendir(a) {
    return true;
}

fs.writeFileSync = writeFileSync;
// fs.miFuncion = miFuncion;
fs.opendir = opendir;

export { fs };