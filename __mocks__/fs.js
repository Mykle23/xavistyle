'use strict';


const fs = jest.createMockFromModule('fs');



fs.writeFileSync = jest.fn();
fs.writeFileSync.mockReturnValueOnce(true).mockImplementation(() => {
    throw new Error();
  });

fs.readFileSync.mockReturnValueOnce('firstCalledWeDontNEED').mockReturnValueOnce({ fer_id: [ {} ] }).mockImplementation(() => {
  throw new Error;
});  




module.exports =fs;
