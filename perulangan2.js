function hitungTotalKalori(daftarAktivitas) {
    let totalKalori = 0;

   
    const kaloriPerMenit = {
        'lari': 60 / 5,      
        'push-up': 200 / 30, 
        'plank': 5 / 1       
    };

    console.log("Rincian Kalori Terbakar:");
    
    
    for (let i = 0; i < daftarAktivitas.length; i++) {
        let jenis = daftarAktivitas[i].jenis.toLowerCase();
        let waktu = daftarAktivitas[i].waktu; 

        if (kaloriPerMenit[jenis]) {
            let kaloriTerbakar = kaloriPerMenit[jenis] * waktu;
            totalKalori += kaloriTerbakar;
            console.log(`- ${jenis} selama ${waktu} menit membakar ${kaloriTerbakar.toFixed(2)} kalori.`);
        } else {
            console.log(`- Aktivitas '${jenis}' tidak terdaftar.`);
        }
    }

    console.log(`\nTotal keseluruhan kalori yang terbakar: ${totalKalori.toFixed(2)} kalori.`);
    return totalKalori;
}


const aktivitasHariIni = [
    { jenis: 'lari', waktu: 15 },
    { jenis: 'push-up', waktu: 15 },
    { jenis: 'plank', waktu: 5 }
];

hitungTotalKalori(aktivitasHariIni);