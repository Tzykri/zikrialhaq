class SensorPasut {
    constructor (nama, lokasi){
        this.nama = nama,
        this.lokasi = lokasi
        this.status = "non akrif";
    }
    aktifkan (){
        this.status = "aktif";
        return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan`
    }

    nonaktifkan (){
        this.status = "non aktif";
        return `Sensor ${this.nama} di ${this.lokasi} telah dinonaktifkan`
    }
    getStatus (){
        return `Sensor ${this.nama} di ${this.lokasi} sedang ${this.status}`
    }
} 

class UsiaSensor extends SensorPasut {
    constructor (nama, lokasi, usia){
        super (nama, lokasi)
        this.usia = usia
    }
}

let SensorPasutMerak = new SensorPasut ("Selat Sunda", "Merak");
console.log (SensorPasutMerak.nonaktifkan());
