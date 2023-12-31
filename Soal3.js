const urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];

const kebiasaanTamu = {
    Ningguang: 'memeriksa kue sebelum memberikan kado',
    Hutao: 'langsung memberikan kado tanpa memperhatikan kue',
    Xiao: 'memotret apa pun yang dia lihat pertama kali di ruangan',
    Childe: 'selalu membawa air mineral dan meletakkannya di meja sebelum memberikan kado'
};

const fotoXiao = 'kue masih utuh';

let tersangka = '';

if (fotoXiao === 'kue masih utuh') {
    tersangka = 'Xiao';
} else {
    tersangka = 'Ningguang';
}

console.log(`Berdasarkan informasi yang diberikan, tersangka yang mungkin mengambil kue adalah: ${tersangka}`);
