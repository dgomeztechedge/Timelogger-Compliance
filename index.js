
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


readline.question(`Introduce la url de un apartado: `, (name) => {
    var url = new URL(name);
    var sessKey = url.searchParams.get('sesskey');
    console.log(`Hi ${sessKey}!`);
    readline.close();
    setInterval(function () {
        callAxios(sessKey)
    }, 30000);
});
function test() {
    console.log('Testing!');
}
function callAxios(sessKey) {
    var time = Date.now();
    axios.get(`https://miaula.abilitia.com/lib/yui/build/moodle-core-checknet/assets/checknet.txt?sesskey=${sessKey}&time=${time}`)
        .then(data => {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}



