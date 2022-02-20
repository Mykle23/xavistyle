'use strict';


const fs = jest.createMockFromModule('fs');



// fs.writeFileSync = jest.fn();
fs.writeFileSync.mockReturnValueOnce(true).mockImplementation(() => {
    throw new Error();
  });

fs.readFileSync = jest.fn();
fs.readFileSync.mockImplementation(()=> {
        return { fer_id: [ {} ] };
});

module.exports =fs;
