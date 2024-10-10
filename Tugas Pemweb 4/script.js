document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk halaman Tentang Kami
    const toggleInfoButton = document.getElementById('toggleInfo');
    const additionalInfo = document.getElementById('additionalInfo');
    
    if (toggleInfoButton && additionalInfo) {
        toggleInfoButton.addEventListener('click', function() {
            if (additionalInfo.style.display === 'none') {
                additionalInfo.style.display = 'block';
                toggleInfoButton.textContent = 'Sembunyikan Informasi Tambahan';
            } else {
                additionalInfo.style.display = 'none';
                toggleInfoButton.textContent = 'Tampilkan Informasi Tambahan';
            }
        });
    }

    // Fungsi untuk halaman Kontak
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            contactForm.reset();
        });
    }

    // Fungsi untuk halaman Blog
    const blogPosts = document.getElementById('blogPosts');
    
    if (blogPosts) {
        const posts = [
            { title: 'Artikel 1', content: 'Ini adalah konten artikel 1.' },
            { title: 'Artikel 2', content: 'Ini adalah konten artikel 2.' },
            { title: 'Artikel 3', content: 'Ini adalah konten artikel 3.' }
        ];

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            blogPosts.appendChild(postElement);
        });
    }
});