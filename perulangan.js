const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function balikKata(teks) {
  return teks.split('').reverse().join('');
}


rl.question('Masukkan kata atau kalimat yang ingin dibalik: ', (kalimatInput) => {
  let kalimatDibalik = balikKata(kalimatInput);
  
  console.log("Asli: " + kalimatInput);
  console.log("Dibalik: " + kalimatDibalik);
  
  
  rl.close();
});