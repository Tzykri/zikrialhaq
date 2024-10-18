const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost', // Atur sesuai konfigurasi MySQL Anda
    user: 'root',      // Sesuaikan dengan username MySQL Anda
    password: '',      // Kosongkan jika tidak ada password MySQL
    database: 'user_management' // Nama database yang Anda gunakan
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
    console.log('Database connected!');
});

module.exports = db;
