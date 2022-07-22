//console.log('mod is run');
const axios = require('axios').default;

const fs = require('fs/promises');


const init = async () => {
    await fs.mkdir(`${__dirname}/reslog`);
    result = await axios.get('https://swapi.dev/api/people/1/');
    console.log(result.data);
}

init();