const sik = {
    kelas : "B",
    angkatan : "2023",
    walidosen : "Alam",
}

console.log (sik.kelas);
console.log (sik.angkatan);
console.log (sik.walidosen);

const siKel = {}

siKel.atribut1 = "value1"
siKel.atribut2 = "value2"
siKel.atribut3 = "value3"

console.log.siKel.atribut1;

delete siKel.atribut1


    let orang = {
        nama : "Faiq",
        pekerjaan : "Presiden",
        kendaraan : {
            motor : "Ducatti",
            mobil : "Subaru",
            pesawat : "boeing",
        }
    }

console.log (orang.kendaraan.mobil)
orang.kendaraan.mobil = "Subaru"

let tampil = "Nama Saya" + orang.nama + ", Saya bekerja sebagai" + orang.pekerjaan + "Sehari-hari saya terbiasa mengendarai pesawat pribadi dengan jenis" + orang.kendaraan.pesawat


// document.getElementById("objek").innerHTML = tampil


let mahasiswa ={
    namaDepan : "Faiq",
    namaBelakang : "Alam",
    namaLengkap : function (){
        return this.namaDepan + " " +this.namaBelakang
    }

}

let tampilMs = "nama saya" + mahasiswa.namaDepan + ", nama lengkap saya adalah" + mahasiswa.namaLengkap()
// document.getElementById("objek").innerHTML = tampilMs

function mahasiswaSIK (nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const mhs1 = new mahasiswaSIK ("Bintang", "B", "2023");
const mhs2 = new mahasiswaSIK ("Faiq", "B", "2023");
const mhs3 = new mahasiswaSIK ("Zaki", "B", "2023");

console.log("nama mahasiswa pertama adalah" + mhs1.nama)
console.log("nama mahasiswa kedua adalah" + mhs2.nama)
console.log("nama mahasiswa ketiga adalah" + mhs3.nama)