'use strict';


const fs = jest.createMockFromModule('fs');



// fs.writeFileSync = jest.fn();
fs.writeFileSync.mockReturnValueOnce(true).mockImplementation(() => {
    throw new Error();
  });
<<<<<<< HEAD

fs.readFileSync.mockReturnValueOnce('firstCalledWeDontNEED').mockReturnValueOnce({ fer_id: [ {} ] }).mockImplementation(() => {
  throw new Error;
});  


=======
>>>>>>> e97d6e8411be6d5b747584e981055b04cf4b315d

fs.readFileSync = jest.fn();
fs.readFileSync.mockImplementation(()=> ({ fer_id: [ {} ] }));

module.exports =fs;
