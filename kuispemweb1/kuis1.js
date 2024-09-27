document.addEventListener('DOMContentLoaded', function() {
    // Membuat elemen form
    const form = document.createElement('form');
    form.id = 'formMahasiswa';
    document.body.appendChild(form);

    // Menambahkan judul form
    const judul = document.createElement('h2');
    judul.textContent = 'Form Kuis';
    form.appendChild(judul);

    // Fungsi untuk membuat elemen input dengan label
    function createInputWithLabel(type, id, name, labelText) {
        const wrapper = document.createElement('div');
        wrapper.className = 'input-wrapper';
        
        const label = document.createElement('label');
        label.htmlFor = id;
        label.textContent = labelText;
        
        const input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.name = name;
        input.required = true;

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        return wrapper;
    }

    // DOM 1: Membuat input nama
    form.appendChild(createInputWithLabel('text', 'nama', 'nama', 'Nama :'));

    // DOM 2: Membuat input NIM
    form.appendChild(createInputWithLabel('text', 'nim', 'nim', 'NIM :'));

    // DOM 3: Membuat select program studi
    const prodiWrapper = document.createElement('div');
    prodiWrapper.className = 'input-wrapper';
    const prodiLabel = document.createElement('label');
    prodiLabel.htmlFor = 'prodi';
    prodiLabel.textContent = 'Program Studi :';
    const prodi = document.createElement('select');
    prodi.id = 'prodi';
    prodi.name = 'prodi';
    prodi.required = true;
    // Membuat opsi untuk dropdown program studi
    const options = ['Pilih Program Studi', 'Logistik Kelautan', 'Sistem Informasi Kelautan', 'PGSD'];
    options.forEach((opt, index) => {
        const option = document.createElement('option');
        option.value = index === 0 ? '' : opt;
        option.textContent = opt;
        prodi.appendChild(option);
    });
    prodiWrapper.appendChild(prodiLabel);
    prodiWrapper.appendChild(prodi);
    form.appendChild(prodiWrapper);

    // DOM 4: Membuat radio button jenis kelamin
    const jkWrapper = document.createElement('div');
    jkWrapper.className = 'input-wrapper';
    const jkLabel = document.createElement('label');
    jkLabel.textContent = 'Jenis Kelmain :';
    jkWrapper.appendChild(jkLabel);
    ['Laki-laki', 'Perempuan'].forEach(jk => {
        const label = document.createElement('label');
        label.className = 'radio-label';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'jenisKelamin';
        radio.value = jk;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(jk));
        jkWrapper.appendChild(label);
    });
    form.appendChild(jkWrapper);

    // DOM 5: Membuat checkbox hobi
    const hobiWrapper = document.createElement('div');
    hobiWrapper.className = 'input-wrapper';
    const hobiLabel = document.createElement('label');
    hobiLabel.textContent = 'Hobi :';
    hobiWrapper.appendChild(hobiLabel);
    ['Game', 'Musik', 'dll.'].forEach(hobi => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'hobi';
        checkbox.value = hobi;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(hobi));
        hobiWrapper.appendChild(label);
    });
    form.appendChild(hobiWrapper);

    // Membuat tombol submit
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Kirim';
    form.appendChild(submitBtn);

    // Event 1: Menangani submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form dikirim secara default
        tampilkanHasil(); // Memanggil fungsi untuk menampilkan hasil
    });

    // Event 2: Validasi input nama (hanya huruf)
    document.getElementById('nama').addEventListener('input', function() {
        this.value = this.value.replace(/[0-9]/g, ''); // Menghapus semua angka dari input
    });

    // Event 3: Validasi input NIM (hanya angka)
    document.getElementById('nim').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); // Menghapus semua karakter nomor
    });

    // Event 4: Menangani perubahan pada select program studi
    prodi.addEventListener('change', function() {
        if (this.value === '') {
            this.setCustomValidity('Silakan pilih program studi');
        } else {
            this.setCustomValidity('');
            console.log('Program Studi dipilih:', this.value);
        }
        
        // Mengubah warna latar belakang berdasarkan pilihan
        switch(this.value) {
            case 'Logistik Kelautan':
                this.style.backgroundColor = '#e6f7ff';
                break;
            case 'Sistem Informasi Kelautan':
                this.style.backgroundColor = '#e6ffe6';
                break;
            case 'PGSD':
                this.style.backgroundColor = '#fff0e6';
                break;
            default:
                this.style.backgroundColor = '';
        }
    });

    // Event 5: Efek hover pada tombol submit
    submitBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#45a049'; // Mengubah warna latar saat kursor di atas tombol
    });
    submitBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Mengembalikan warna latar saat kursor meninggalkan tombol
    });

    // Fungsi untuk menampilkan hasil input form
    function tampilkanHasil() {
        // untuk dapat menambahkan logika untuk mengambil nilai dari semua input
        // dan menampilkannya ke pengguna, misalnya dalam sebuah alert atau di dalam halaman
        // Contoh implementasi sederhana:
        alert('Form telah disubmit!');
    }
});
