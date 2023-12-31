const menu = [
    {
        "namaMenu" : "Ayam Goreng Krispi",
        "hargaMenu" : 15000, 
        "tipeMenu" : "Makanan"
    },
    {
        "namaMenu" : "Ayam Puk Puk (Bukan di geprek)",
        "hargaMenu" : 13000, 
        "tipeMenu" : "Makanan"
    },
    {
        "namaMenu" : "Ayam Bakar",
        "hargaMenu" : 20000, 
        "tipeMenu" : "Makanan"
    },
    {
        "namaMenu" : "Es teh",
        "hargaMenu" : 5000, 
        "tipeMenu" : "Minuman"
    },
    {
        "namaMenu" : "Es Jeruk",
        "hargaMenu" : 7000, 
        "tipeMenu" : "Minuman"
    },
]

const pajakMakanan = 0.05;
const pajakMinuman = 0.03;
const pajakTransaksi = 0.15;

function cashier(pesanan) {
    var totalHarga = 0;
    
    pesanan.forEach(item => {
        const menuTerpilih = menu.find(menuItem => menuItem.namaMenu === item.namaMenu);
        let harga = menuTerpilih.hargaMenu;

        if (menuTerpilih) {
            if (menuTerpilih.tipeMenu === 'Makanan') {
                harga += harga * pajakMakanan;
            } else if (menuTerpilih.tipeMenu === 'Minuman') {
                harga += harga * pajakMinuman;
            }
        }
    
        totalHarga += harga * item.jumlah;
        
    });

    return totalHarga;
}

const rehan = [
    { "namaMenu": 'Ayam Bakar', "jumlah": 2 },
    { "namaMenu": 'Es teh', "jumlah": 1 }
];

const roni = [
    { "namaMenu": 'Ayam Puk Puk (Bukan di geprek)', "jumlah": 1 },
    { "namaMenu": 'Es teh', "jumlah": 3 }
];

const faiz = [
    { "namaMenu": 'Ayam Goreng Krispi', "jumlah": 1 },
    { "namaMenu": 'Ayam Puk Puk (Bukan di geprek)', "jumlah": 1 },
    { "namaMenu": 'Ayam Bakar', "jumlah": 1 },
    { "namaMenu": 'Es teh', "jumlah": 1 },
    { "namaMenu": 'Es Jeruk', "jumlah": 1 }
];

var totalBelanjaRehan = cashier(rehan);
totalBelanjaRehan += totalBelanjaRehan * pajakTransaksi
console.log("Bill Rehan sebesar : Rp " + totalBelanjaRehan)

var totalBelanjaRoni = cashier(roni);
totalBelanjaRoni += totalBelanjaRoni * pajakTransaksi
console.log("Bill Roni sebesar : Rp " + totalBelanjaRoni)

var totalBelanjaFaiz = cashier(faiz);
totalBelanjaFaiz += totalBelanjaFaiz * pajakTransaksi
console.log("Bill Faiz sebesar : Rp " + totalBelanjaFaiz)

