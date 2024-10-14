const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pertemuan5'
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.stack);
        return;
    }
    console.log("Koneksi MySQL berhasil dengan id " + connection.threadId);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routing (CRUD)

// Read (Menampilkan daftar produk)
app.get('/', (req, res) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { products: results });
    });
});

// Create (Menambah produk baru)
app.post('/add', (req, res) => {
    const { nama_produk, harga } = req.body;
    const query = 'INSERT INTO products (nama_produk, harga) VALUES (?, ?)';
    connection.query(query, [nama_produk, harga], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan saat menambahkan produk');
        } else {
            res.send('<script>alert("Produk baru berhasil ditambahkan!"); window.location.href="/";</script>');
        }
    });
});

// Read single product data for update
app.get('/edit/:id', (req, res) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan saat mengambil data produk');
        } else if (results.length === 0) {
            res.status(404).send('Produk tidak ditemukan');
        } else {
            res.render('edit', { product: results[0] });
        }
    });
});

// Update
app.post('/update/:id', (req, res) => {
    const { nama_produk, harga } = req.body;
    const query = 'UPDATE products SET nama_produk = ?, harga = ? WHERE id = ?';
    connection.query(query, [nama_produk, harga, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan saat memperbarui data produk');
        } else {
            res.send('<script>alert("Data produk berhasil diperbarui!"); window.location.href="/";</script>');
        }
    });
});

// Hapus
app.get('/delete/:id', (req, res) => {
    const query = 'DELETE FROM products WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.send('<script>alert("Produk berhasil dihapus!"); window.location.href="/";</script>');
    });
});

// Jalankan server
app.listen(3000, () => {
    console.log("Server berhasil berjalan di port 3000, buka web melalui http://localhost:3000");
});
