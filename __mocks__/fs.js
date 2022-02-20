'use strict';


const fs = jest.createMockFromModule('fs');



fs.writeFileSync = jest.fn();
fs.writeFileSync.mockReturnValueOnce(true).mockImplementation(() => {
    throw new Error();
  });;



module.exports =fs;
