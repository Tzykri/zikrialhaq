// Kelas dasar untuk semua jenis kapal
class Kapal {
    // Properti privat untuk enkapsulasi data
    #nama;
    #jenis;
    #kapasitas;
    #panjang;
    #lebar;

    // Constructor untuk inisialisasi objek Kapal
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.#nama = nama;
        this.#jenis = jenis;
        this.#kapasitas = kapasitas;
        this.#panjang = panjang;
        this.#lebar = lebar;
    }

    // Getter dan setter untuk properti nama
    get nama() { return this.#nama; }
    set nama(nilai) { this.#nama = nilai; }

    // Getter dan setter untuk properti jenis
    get jenis() { return this.#jenis; }
    set jenis(nilai) { this.#jenis = nilai; }

    // Getter dan setter untuk properti kapasitas dengan validasi
    get kapasitas() { return this.#kapasitas; }
    set kapasitas(nilai) { 
        if (nilai > 0) {
            this.#kapasitas = nilai;
        } else {
            console.log("Kapasitas harus lebih dari 0");
        }
    }

    // Getter dan setter untuk properti panjang dengan validasi
    get panjang() { return this.#panjang; }
    set panjang(nilai) { 
        if (nilai > 0) {
            this.#panjang = nilai;
        } else {
            console.log("Panjang harus lebih dari 0");
        }
    }

    // Getter dan setter untuk properti lebar dengan validasi
    get lebar() { return this.#lebar; }
    set lebar(nilai) { 
        if (nilai > 0) {
            this.#lebar = nilai;
        } else {
            console.log("Lebar harus lebih dari 0");
        }
    }

    // Method untuk menampilkan informasi kapal
    infoKapal() {
        return `Kapal ${this.#nama} (${this.#jenis}) - Kapasitas: ${this.#kapasitas}, Ukuran: ${this.#panjang}x${this.#lebar}`;
    }

    // Method untuk menghitung luas kapal
    hitungLuasKapal() {
        return this.#panjang * this.#lebar;
    }

    // Method polimorfik untuk menghitung biaya operasional dasar
    hitungBiayaOperasional() {
        return this.hitungLuasKapal() * 100; // Biaya dasar
    }
}

// Kelas turunan untuk kapal penumpang
class KapalPenumpang extends Kapal {
    #jumlahDek; // Properti khusus untuk kapal penumpang

    // Constructor untuk inisialisasi objek KapalPenumpang
    constructor(nama, kapasitas, panjang, lebar, jumlahDek) {
        super(nama, "Penumpang", kapasitas, panjang, lebar);
        this.#jumlahDek = jumlahDek;
    }

    // Getter dan setter untuk properti jumlahDek dengan validasi
    get jumlahDek() { return this.#jumlahDek; }
    set jumlahDek(nilai) {
        if (nilai > 0) {
            this.#jumlahDek = nilai;
        } else {
            console.log("Jumlah dek harus lebih dari 0");
        }
    }

    // Method untuk menghitung kapasitas per dek
    hitungKapasitasPerDek() {
        return Math.floor(this.kapasitas / this.#jumlahDek);
    }

    // Implementasi polimorfik dari hitungBiayaOperasional
    hitungBiayaOperasional() {
        return super.hitungBiayaOperasional() + (this.#jumlahDek * 1000);
    }
}

// Kelas turunan untuk kapal kargo
class KapalKargo extends Kapal {
    #kapasitasMuatan; // Properti khusus untuk kapal kargo

    // Constructor untuk inisialisasi objek KapalKargo
    constructor(nama, kapasitas, panjang, lebar, kapasitasMuatan) {
        super(nama, "Kargo", kapasitas, panjang, lebar);
        this.#kapasitasMuatan = kapasitasMuatan;
    }

    // Getter dan setter untuk properti kapasitasMuatan dengan validasi
    get kapasitasMuatan() { return this.#kapasitasMuatan; }
    set kapasitasMuatan(nilai) {
        if (nilai > 0) {
            this.#kapasitasMuatan = nilai;
        } else {
            console.log("Kapasitas muatan harus lebih dari 0");
        }
    }

    // Method untuk menghitung efisiensi muatan
    hitungEfisiensiMuatan() {
        return (this.#kapasitasMuatan / this.hitungLuasKapal()).toFixed(2);
    }

    // Implementasi polimorfik dari hitungBiayaOperasional
    hitungBiayaOperasional() {
        return super.hitungBiayaOperasional() + (this.#kapasitasMuatan * 0.5);
    }
}

// Kelas baru: KapalTanker
class KapalTanker extends Kapal {
    #kapasitasTangki; // Properti khusus untuk kapal tanker

    constructor(nama, kapasitas, panjang, lebar, kapasitasTangki) {
        super(nama, "Tanker", kapasitas, panjang, lebar);
        this.#kapasitasTangki = kapasitasTangki;
    }

    // Getter dan setter untuk properti kapasitasTangki dengan validasi
    get kapasitasTangki() { return this.#kapasitasTangki; }
    set kapasitasTangki(nilai) {
        if (nilai > 0) {
            this.#kapasitasTangki = nilai;
        } else {
            console.log("Kapasitas tangki harus lebih dari 0");
        }
    }

    // Implementasi polimorfik dari hitungBiayaOperasional
    hitungBiayaOperasional() {
        return super.hitungBiayaOperasional() + (this.#kapasitasTangki * 0.8);
    }
}

// Kelas baru: KapalSelam
class KapalSelam extends Kapal {
    #kedalamaMaksimum; // Properti khusus untuk kapal selam

    constructor(nama, kapasitas, panjang, lebar, kedalamaMaksimum) {
        super(nama, "Selam", kapasitas, panjang, lebar);
        this.#kedalamaMaksimum = kedalamaMaksimum;
    }

    // Getter dan setter untuk properti kedalamaMaksimum dengan validasi
    get kedalamaMaksimum() { return this.#kedalamaMaksimum; }
    set kedalamaMaksimum(nilai) {
        if (nilai > 0) {
            this.#kedalamaMaksimum = nilai;
        } else {
            console.log("Kedalaman maksimum harus lebih dari 0");
        }
    }

    // Implementasi polimorfik dari hitungBiayaOperasional
    hitungBiayaOperasional() {
        return super.hitungBiayaOperasional() + (this.#kedalamaMaksimum * 100);
    }
}

// Kelas baru: KapalPesiar, mewarisi dari KapalPenumpang
class KapalPesiar extends KapalPenumpang {
    #jumlahFasilitas; // Properti khusus untuk kapal pesiar

    constructor(nama, kapasitas, panjang, lebar, jumlahDek, jumlahFasilitas) {
        super(nama, kapasitas, panjang, lebar, jumlahDek);
        this.#jumlahFasilitas = jumlahFasilitas;
    }

    // Getter dan setter untuk properti jumlahFasilitas dengan validasi
    get jumlahFasilitas() { return this.#jumlahFasilitas; }
    set jumlahFasilitas(nilai) {
        if (nilai > 0) {
            this.#jumlahFasilitas = nilai;
        } else {
            console.log("Jumlah fasilitas harus lebih dari 0");
        }
    }

    // Implementasi polimorfik dari hitungBiayaOperasional
    hitungBiayaOperasional() {
        return super.hitungBiayaOperasional() + (this.#jumlahFasilitas * 5000);
    }
}

// Fungsi untuk menampilkan informasi dan biaya operasional kapal
function tampilkanInfoKapal(kapal) {
    console.log(kapal.infoKapal());
    console.log(`Biaya Operasional: Rp${kapal.hitungBiayaOperasional().toLocaleString()}`);
    console.log("--------------------");
}

// Contoh penggunaan: membuat objek untuk setiap jenis kapal
let kapalPenumpang = new KapalPenumpang("Budiono Siregar", 500, 200, 100, 5);
let kapalKargo = new KapalKargo("Muatan Sejahtera", 100, 150, 80, 5000);
let kapalTanker = new KapalTanker("Minyak Nusantara", 50, 180, 90, 10000);
let kapalSelam = new KapalSelam("Penjelajah Laut", 30, 70, 10, 500);
let kapalPesiar = new KapalPesiar("Pesona Bahari", 1000, 300, 150, 10, 20);

// Menampilkan informasi dan biaya operasional untuk setiap kapal
tampilkanInfoKapal(kapalPenumpang);
tampilkanInfoKapal(kapalKargo);
tampilkanInfoKapal(kapalTanker);
tampilkanInfoKapal(kapalSelam);
tampilkanInfoKapal(kapalPesiar);

// Menampilkan informasi kapal penumpang di elemen HTML dengan id "objek"
document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal();