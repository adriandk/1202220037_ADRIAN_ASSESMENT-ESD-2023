function hitungKembalian(totalPembayaran, totalBelanja) {
    const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let kembalian = totalPembayaran - totalBelanja;
    const hasilKembalian = {};

    pecahanUang.forEach(pecahan => {
        if (kembalian >= pecahan) {
            const jumlah = Math.floor(kembalian / pecahan);
            hasilKembalian[pecahan] = jumlah;
            kembalian -= jumlah * pecahan;
        }
    });

    return hasilKembalian;
}

const kembalian1 = hitungKembalian(10000, 7500);
console.log(kembalian1);

const kembalian2 = hitungKembalian(5000, 1100);
console.log(kembalian2);

const kembalian3 = hitungKembalian(178000, 90500);
console.log(kembalian3);
