const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let newStr = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i = 0; i < str.length; i++) {
        const s = str[i];
        
        if(s === s.toUpperCase()) {
            newStr += s.toLowerCase();
        } else {
            newStr += s.toUpperCase();
        }
    }
    
    console.log(newStr);
});