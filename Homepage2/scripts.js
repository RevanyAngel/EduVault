document.addEventListener('DOMContentLoaded', function () {
    // Data Buku (Simulasi, bisa diganti dengan data fetch dari database)
    const newReleaseBooks = [
        { title: 'Pengembangan Sistem Informasi Tagihan Air Bersih Desa', author: 'M. Imam Fathulloh Al Bahri', img: '/EduVault/jurnal/D.png', pdf:'/EduVault/jurnal/4.pdf' },
        { title: 'Database MySQL', author: 'Abdul Kadir', img: '/EduVault/image/cover buku_Tuntunan Praktis Belajar Database.avif' },
        { title: 'Audit Tata Kelola TI Pada BMKG Dengan Menggunakan Framework COBIT 2019', author: 'Ade Irma Aprianingsih', img: '/EduVault/jurnal/A.png', pdf:'/EduVault/jurnal/1.pdf' },
        { title: 'ALjabar Linear Dasar', author: 'Qurrotul Aini', img: '/EduVault/image/cover buku_aljabar linear dasar.jpeg' },
        { title: 'Rekayasa Perangkat Lunak', author: 'Rosa A.S', img: '/EduVault/image/CB_RPL.jpeg' },
        { title: 'Pemrograman Robot', author: 'Taufiq Dwi', img: '/EduVault/image/CB_Pemrograman Robot.jpg' }
    ];

    const trendingBooks = [
        { title: 'HTML5 dan Javascript untuk Pemula', author: 'Jubilee Enterprise', img: '/EduVault/image/cover buku_HTML5 dan Javascript untuk Pemula.jpg' },
        { title: 'Pemrograman Bahasa C#', author: 'Budi Raharjo', img: '/EduVault/image/A1.jpg' },
        { title: 'Rancang Bangun Aplikasi Manajemen Kos', author: 'Daris Irfan Putrawanto', img: '/EduVault/jurnal/F.png', pdf:'/EduVault/jurnal/6.pdf' },
        { title: 'Pengantar Metode Numerik', author: 'Dr. Elis Ratna Wulan', img: '/EduVault/image/cover buku_pengantar metode numerik.jpg' },
        { title: 'Penerapanan Model Deteksi Objek Untuk Robot', author: 'Ilham Rizqyakbar', img: '/EduVault/jurnal/E.png', pdf:'/EduVault/jurnal/5.pdf' }
    ];

    // Fungsi untuk menampilkan buku
    function displayBooks(bookList, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Bersihkan kontainer sebelum menambahkan buku
        bookList.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
            <a href="${book.pdf}" target="_blank" style="text-decoration: none; color: inherit;">
                <img src="${book.img}" alt="${book.title}" class="book-img">
                <p class="book-title">${book.title}</p>
                <span class="book-author">${book.author}</span>
            `;
            container.appendChild(bookDiv);
        });
    }

    // Tampilkan Buku Baru dan Tren
    displayBooks(newReleaseBooks, 'newReleaseBooks');
    displayBooks(trendingBooks, 'trendingBooks');

    // Fungsi untuk Login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nim = document.getElementById('nim').value;
        const password = document.getElementById('password').value;

        // Simulasi autentikasi (Ganti dengan autentikasi database)
        const validNIM = ["0910123456", "0760456789"]; // Daftar NIM valid
        const validPassword = "password123";

        if (validNIM.includes(nim) && password === validPassword) {
            alert('Login Sukses!');
            window.location.href = 'home.html'; // Arahkan ke halaman utama
        } else {
            alert('NIM atau Password salah!');
        }
    });

    // Data mata kuliah berdasarkan semester
    const mataKuliah = {
        1: ["Matematika Dasar", "Bahasa Indonesia", "Pengantar Komputer"],
        2: ["Fisika Dasar", "Bahasa Inggris", "Algoritma dan Pemrograman"],
        3: ["Statistika", "Basis Data", "Pemrograman Web"],
        4: ["Sistem Operasi", "Jaringan Komputer", "Kecerdasan Buatan"]
};

// Fungsi untuk memperbarui dropdown mata kuliah
    function updateMataKuliah() {
        const semesterSelect = document.getElementById("semester");
        const mataKuliahSelect = document.getElementById("mata-kuliah");
        const selectedSemester = semesterSelect.value;

        // Reset dropdown mata kuliah
        mataKuliahSelect.innerHTML = '<option value="">-- Pilih Mata Kuliah --</option>';
        mataKuliahSelect.disabled = true;

        if (selectedSemester) {
            // Tambahkan opsi mata kuliah sesuai semester
            mataKuliah[selectedSemester].forEach((mataKuliahItem) => {
                const option = document.createElement("option");
                option.value = mataKuliahItem;
                option.textContent = mataKuliahItem;
                mataKuliahSelect.appendChild(option);
            });
            mataKuliahSelect.disabled = false;
        }
    }


    // Animasi sederhana untuk gambar buku saat hover
    document.querySelectorAll('.book-img').forEach(img => {
        img.addEventListener('mouseover', function () {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s';
        });
        img.addEventListener('mouseout', function () {
            img.style.transform = 'scale(1)';
        });
    });
});


function openPopup() {
    document.getElementById('aboutUsPopup').style.bottom = '0';
}
function closePopup() {
    document.getElementById('aboutUsPopup').style.bottom = '-100%';
}

function moveSlide(direction) {
    const sliderContainer = document.getElementById('sliderContainer');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = 3;

    currentIndex += direction;

    // Batasi slide
    if (currentIndex < 0) {
        currentIndex = totalSlides - visibleSlides;
    } else if (currentIndex > totalSlides - visibleSlides) {
        currentIndex = 0;
    }

    // Perbarui posisi
    sliderContainer.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
}