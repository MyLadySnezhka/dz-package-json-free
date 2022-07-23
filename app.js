//console.log('mod is run');
const axios = require('axios');

const fs = require('fs/promises');
const timelog = Date.now();

//const init = async () => {
   // if(__dirname!='reslog'){
     // await fs.mkdir(`${__dirname}/reslog`);
    // else console.log('uzhe est');  
//}

//init();

let zapislog;

const init = async () => {
   result = await axios.get('https://swapi.dev/api/people/1/');
   zapislog = result.data;
}

const fileHandler = async () => {
    await init();   
    // fs.open('testFile.txt', 'a+');
    //fs.appendFile(`${timelog}.log`, `\n${zapislog.name}`, 'utf8');
    fs.writeFile(`${timelog}.log`, `\n${zapislog.name}`, 'utf8');
    console.log('Done!');
}

fileHandler();

