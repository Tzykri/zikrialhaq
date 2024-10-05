class Kapal {
    // Properti privat
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
        return `Kapal ini bernama ${this.#nama} yang jenis ${this.#jenis} dengan kapasitas ${this.#kapasitas} memiliki panjang ${this.#panjang} x lebar ${this.#lebar}`;
    }

    // Method untuk menghitung luas kapal
    hitungLuasKapal() {
        return this.#panjang * this.#lebar;
    }
}

// Kelas turunan untuk kapal penumpang
class KapalPenumpang extends Kapal {
    #jumlahDek;

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
}

// Kelas turunan untuk kapal kargo
class KapalKargo extends Kapal {
    #kapasitasMuatan;

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
}

// Contoh penggunaan kelas KapalPenumpang
let kapalPenumpang = new KapalPenumpang("Budiono Siregar", 500, 200, 100, 5);
console.log(kapalPenumpang.infoKapal());
console.log(`Luas kapal: ${kapalPenumpang.hitungLuasKapal()} meter persegi`);
console.log(`Kapasitas per dek: ${kapalPenumpang.hitungKapasitasPerDek()} orang`);

// Contoh penggunaan kelas KapalKargo
let kapalKargo = new KapalKargo("Muatan Sejahtera", 100, 150, 80, 5000);
console.log(kapalKargo.infoKapal());
console.log(`Efisiensi muatan: ${kapalKargo.hitungEfisiensiMuatan()} ton/meter persegi`);

// Menampilkan informasi kapal penumpang di elemen HTML dengan id "objek"
document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal();
