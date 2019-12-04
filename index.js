
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


readline.question(`ID de sesión?`, (name) => {
    console.log(`Hi ${name}!`);
    readline.close();
    setInterval(function () { callAxios(name)} ,30000);   
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



