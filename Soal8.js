const produk = [
    {
        "namaProduk" : 'TV',
        "kategori" : 'elektronik',
        "harga" : 1000
    },
    {
        "namaProduk" : 'handphone',
        "kategori" : 'elektronik',
        "harga" : 200
    },
    {
        "namaProduk" : 'baju',
        "kategori" : 'fashion',
        "harga" : 50
    },
    {
        "namaProduk" : 'gitar',
        "kategori" : 'musik',
        "harga" : 300
    },
    {
        "namaProduk" : 'sepatu',
        "kategori" : 'olahraga',
        "harga" : 80
    },
    {
        "namaProduk" : 'kamera',
        "kategori" : 'elektronik',
        "harga" : 600
    }
];

const pelanggan = [
    {
        "nama" : "Rina",
        "minat" : ['elektronik', 'musik'],
        "beli" : ['TV', 'headphone']
    },
    {
        "nama" : "Hartono",
        "minat" : ['olahraga', 'elektronik'],
        "beli" : ['sepatu', 'kamera']
    },
    {
        "nama" : "Budi",
        "minat" : ['fashion', 'musik'],
        "beli" : ['baju', 'gitar']
    }
];

function rekomendasiProduk(namaPelanggan) {
    const dataPelanggan = pelanggan.find(pelanggan => pelanggan.nama === namaPelanggan);

    const minatPelanggan = dataPelanggan.minat;
    const beliPelanggan = dataPelanggan.beli;

    const rekomendasi = produk.filter(product => minatPelanggan.includes(product.kategori) && !beliPelanggan.includes(product.namaProduk)).map(product => product.namaProduk);

    return rekomendasi;
}

const rekomendasiRina = rekomendasiProduk('Rina');
const rekomendasiBudi = rekomendasiProduk('Budi');
const rekomendasiHartono = rekomendasiProduk('Hartono');

console.log('Rekomendasi untuk Rina:', rekomendasiRina);
console.log('Rekomendasi untuk Budi:', rekomendasiBudi);
console.log('Rekomendasi untuk Hartono:', rekomendasiHartono);