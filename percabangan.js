const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== DAFTAR BARANG ===");
console.log("1. penggaris - Rp 5.000");
console.log("2. buku  - Rp 7.000");
console.log("3. Sepatu - Rp 250.000");
console.log("4. Topi   - Rp 40.000");
console.log("5. Kaos   - Rp 80.000");
console.log("=====================\n");

let totalBelanja = 0;
let jumlahItemDibeli = 0;
const minimalItem = 3; 

function dapatkanHargaBarang(pilihan) {
    let harga = 0;
    
    switch (pilihan) {
        case '1':
            harga = 5000;
            break;
        case '2':
            harga = 7000;
            break;
        case '3':
            harga = 250000;
            break;
        case '4':
            harga = 40000;
            break;
        case '5':
            harga = 80000;
            break;
        default:
            harga = 0;
            break;
    }
    return harga;
}

function prosesInputBarang() {
   
    if (jumlahItemDibeli < minimalItem) {
        rl.question(`Pilih barang ke-${jumlahItemDibeli + 1} (masukkan angka 1-5): `, (input) => {
            let hargaItem = dapatkanHargaBarang(input);
            
            if (hargaItem === 0) {
                console.log("Pilihan tidak valid, silakan masukkan angka 1 sampai 5.");
                prosesInputBarang();
            } else {
          
                totalBelanja += hargaItem;
                jumlahItemDibeli++;
                prosesInputBarang();
            }
        });
    } else {
        kalkulasiPembayaran();
    }
}

function kalkulasiPembayaran() {
    let persentaseDiskon = 0;

    if (totalBelanja >= 300000) {
        persentaseDiskon = 10;
    } else if (totalBelanja >= 100000) {
        persentaseDiskon = 5;
    } else if (totalBelanja >= 50000) {
        persentaseDiskon = 3;
    }

    let totalDiskon = totalBelanja * (persentaseDiskon / 100);
    
    
    let totalBayar =  totalBelanja - totalDiskon;

    console.log("\n--- HASIL PEMBAYARAN ---");
    
    
    if (persentaseDiskon > 0) {
        console.log(`Total Belanja Rp${totalBelanja}`);
        console.log(`Diskon ${persentaseDiskon}% Rp${totalDiskon}`);
        console.log(`Total Bayar Rp${totalBayar}`);
    } else {
        console.log(`Total Belanja Rp${totalBelanja}`);
        console.log("Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan");
    }
    
    rl.close();
}
prosesInputBarang();